cd ./catberry &&
node ./server.js &
(sleep 3s &&
	echo "===Catberry===" > ./results/catberry.txt &&
	ab -c 10 -n 3000 http://127.0.0.1:3001/ >> ./results/catberry.txt && 
	cd .. &&
	echo "Saved in ./results/catberry.txt"
)
wait
