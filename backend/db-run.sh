sudo docker run -d \
  -p 5432:5432 \
  -e POSTGRES_USER=przdnik \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=development_przdnik \
  --name przdnik_db \
  postgres
  
  #-v przdnik_db:/var/lib/postgresql/data \