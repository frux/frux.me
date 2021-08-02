TMP=./out.tmp
OUT=./out

out: clean
	mkdir $(TMP)
	mkdir $(OUT)
	npx next build
	npx next export -o $(TMP)
	cp -R $(TMP)/* $(OUT)/
	rm -rf $(TMP)
	node ./scripts/delete-scripts `realpath $(OUT)`
	node ./scripts/generate-sitemap
clean:
	rm -rf $(TMP)
	rm -rf $(OUT)
deploy:
	aws --endpoint-url=https://storage.yandexcloud.net s3 rm --recursive s3://frux.me/
	aws --endpoint-url=https://storage.yandexcloud.net s3 cp --recursive ./out/ s3://frux.me/
