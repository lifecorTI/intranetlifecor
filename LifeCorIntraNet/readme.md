docker build -t hello_world_express_node .

docker run --name express_node -p 2016:2016 -d hello_world_express_node --restart=always
