FROM debian:latest

COPY wordcount.sh /data/wordcount.sh

RUN chmod +x /data/wordcount.sh

RUN apt-get update && apt-get install -y \
  enscript \
  ghostscript

VOLUME ["/data"]
