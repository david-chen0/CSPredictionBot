import HLTV from 'hltv'; 

// IMPORTANT INFO
// The HLTV data is scraped, not through API. If HLTV changes their format, this could fail and need changes to the HLTV scraper

// Just gonna do this through CLI for now for testing
const method = process.argv[2];
const arg = parseInt(process.argv[3]);

const instance = HLTV.createInstance({});

(async () => {
    let result;

    switch (method) {
        case "getTeam":
            result = await instance.getTeam({ id: arg });
            break;

        default:
            throw new Error(`Unknown method: ${method}`);
    }

    // Simplify or restructure result as needed
    console.log(JSON.stringify(result));
})();
