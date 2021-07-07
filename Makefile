TMP=./out.tmp
OUT=./out

out: clean
	npx next build
	npx next export -o $(TMP)
	mkdir -p $(OUT)/_next/static/css
	mkdir -p $(OUT)/en
	cp $(TMP)/*.html $(OUT)/
	cp $(TMP)/en/*.html $(OUT)/en/
	cp -R $(TMP)/_next/static/css/* $(OUT)/_next/static/css
	rm -rf $(TMP)
	rm -rf $(OUT)/404.html
	node ./scripts/delete-scripts `realpath $(OUT)`
clean:
	rm -rf $(OUT)
