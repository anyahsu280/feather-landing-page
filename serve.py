import http.server, ssl

server_address = ('localhost', 8080)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket,server_side=True,
                               keyfile="/Users/marceloautran/.ssl/localhost.key",
                               certfile="/Users/marceloautran/.ssl/localhost.crt",
                               ssl_version=ssl.PROTOCOL_TLS)
httpd.serve_forever()