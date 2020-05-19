package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-redis/redis/v7"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

var C *redis.Client

func main() {
	SetupCache()
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{http.MethodGet, http.MethodPost, http.MethodDelete},
		AllowCredentials: true,
	})

	router := mux.NewRouter()
	router.HandleFunc("/", PongServer)

	port := 5000
	log.Printf("Listening on port: %v", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), c.Handler(router)))
}

func PongServer(w http.ResponseWriter, r *http.Request) {
	res, err := C.Ping().Result()
	if err != nil {
		log.Fatalf("Failed to connect to redis server: %v", err)
	}
	fmt.Fprintf(w, "Yo, %s!", res)
}

func SetupCache() {
	C = redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
	})
}
