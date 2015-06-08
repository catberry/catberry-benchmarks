# Benchmark for Catberry's server-side rendering

## Description
For now, it's just a comparison with bare [express](http://expressjs.com/) application which uses [Jade template engine](http://jade-lang.com/).

## Methodology
The `ApacheBench, Version 2.3 <$Revision: 1604373 $>` is used for testing:
 * Number of requests is **3000***
 * Concurrency level is **10**

Both applications should:
 * render almost identical HTML (except Catberry renders the extra symbol in style tag).
 * use the same set of data generated by `./generate-data.js` script and saved as `./data.json`
 * have configurations with turned off log messages for every request
 * have last versions of packages (`./setup.sh` to install all dependencies)

## Results
You can find the results in the `./results` directory which are received on such configuration:
 * MacBook Pro (Retina, 13-inch, Late 2012)
 * 2.5 GHz Intel Core i5
 * 8 GB 1600 MHz DDR3
 * Intel HD Graphics 4000 1024 MB
 * OS X 10.10.3 (14D136)

```
node --version
v1.8.1
```

catberry@5.2.0
express@4.12.4

Here are the main numbers:

### Catberry
```
Requests per second:    114.76 [#/sec] (mean)
Time per request:       87.142 [ms] (mean)
Time per request:       8.714 [ms] (mean, across all concurrent requests)
Transfer rate:          207.99 [Kbytes/sec] received
```

### Express
```
Requests per second:    115.41 [#/sec] (mean)
Time per request:       86.648 [ms] (mean)
Time per request:       8.665 [ms] (mean, across all concurrent requests)
Transfer rate:          215.49 [Kbytes/sec] received
```

## Conclusion
Despite on Catberry's stream-based and component-based rendering engine which has overhead related to usage of stream transformations with HTML parsing it still has almost the same performance as bare Express with the same template engine.