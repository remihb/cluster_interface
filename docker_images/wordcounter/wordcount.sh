echo "$(wc -l < $1)" > /data/out/out.txt

if [ "$2" == "-pdf" ]; then 
enscript /data/out/out.txt -B -o - | ps2pdf - /data/out/out.pdf
rm /data/out/out.txt
fi

