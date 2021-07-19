TMP=./out.tmp
OUT=./out

out: clean
	npx next build
	npx next export -o $(TMP)
	mkdir $(OUT)
	cp -R $(TMP)/* $(OUT)/
	rm -rf $(OUT)/_next
	mkdir -p $(OUT)/_next/static/css
	cp -R $(TMP)/_next/static/css/* $(OUT)/_next/static/css
	rm -rf $(TMP)
	rm -rf $(OUT)/404.html
	node ./scripts/delete-scripts `realpath $(OUT)`
	node ./scripts/generate-sitemap
clean:
	rm -rf $(OUT)
deploy:
	aws --endpoint-url=https://storage.yandexcloud.net s3 rm --recursive s3://frux.me/
	aws --endpoint-url=https://storage.yandexcloud.net s3 cp --recursive ./out/ s3://frux.me/
