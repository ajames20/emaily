function localtunnel {
lt -s emailysubdomain143515132 --port 5000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done