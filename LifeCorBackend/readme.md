docker build -t hello_world_express_node .

docker run --name express_node -p 3000:3000 -d hello_world_express_node --restart=always
