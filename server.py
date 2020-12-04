import http.server
import socketserver
port=8000
Handler=http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("",port),Handler) as http:
    print("Serving ")
    http.serve_forever()
    while True:
        print(http.requests)



