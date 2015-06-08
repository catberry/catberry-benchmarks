cd ./express && 
node ./index.js & 
(sleep 3s && 
	echo "===Express===" > ./results/express.txt && 
	ab -c 10 -n 3000 http://localhost:3000/ >> ./results/express.txt && 
	cd .. && 
	echo "Saved in ./results/express.txt" 
)
wait