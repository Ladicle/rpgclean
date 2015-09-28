package main

import(
	"fmt"
	"os"
	"os/exec"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, World")
}

func punch(w http.ResponseWriter, r*http.Request) {
	out, err := exec.Command("afplay", "sound/punch-middle2.mp3").Output()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Println(string(out))
}

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/punch", punch)
	http.ListenAndServe(":8080", nil)
}
