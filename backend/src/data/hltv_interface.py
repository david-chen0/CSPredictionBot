# We can use this package: https://github.com/gigobyte/HLTV
# Package is a NodeJS package though, so we can't just use it in Python directly
# We can make our backend for this in JS and then have Python start a subprocess which calls our JS APIs that callthis package

# put it in the hltv_service folder

# FIGURE OUT WHAT THE BEST WAY TO CALL JS FROM PYTHON IS

# THIS WILL LIKELY WORK BUT IS PROLLY SLOW AS SHIT
def call_hltv(method: str, id: int) -> dict:
    result = subprocess.run(
        ["node", "../scraper/hltv-wrapper.js", method, str(id)],
        capture_output=True,
        text=True,
        check=True
    )
    return json.loads(result.stdout)
