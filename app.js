// @ts-check
//  <ImportConfiguration>
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");
//  </ImportConfiguration>

async function main() {
  
  // <CreateClientObjectDatabaseContainer>
  const { endpoint, key, databaseId, containerId } = config;

  const client = new CosmosClient({ endpoint, key });

  const database = client.database(databaseId);
  const container = database.container(containerId);

  // Make sure Tasks database is already setup. If not, create it.
  await dbContext.create(client, databaseId, containerId);
  // </CreateClientObjectDatabaseContainer>
  
  try {
    // <QueryItems>
    console.log(`Querying container: Items`);

    // query to return all items
    const querySpec = {
      query: "SELECT * from c"
    };
    
    // read all items in the Items container
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    items.forEach(item => {
      console.log(`${item.id} - ${item.fabricante}`);
    });
    // </QueryItems>
    
  } catch (err) {
    console.log(err.message);
  }
}

main();
