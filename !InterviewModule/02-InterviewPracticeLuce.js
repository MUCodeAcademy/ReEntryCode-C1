const logDay1 = [
    { timestamp: "2023-06-01T12:00:00Z", pageId: "home", customerId: "123" },
    { timestamp: "2023-06-01T12:10:00Z", pageId: "products", customerId: "123" },
    { timestamp: "2023-06-01T12:20:00Z", pageId: "about", customerId: "124" },
    { timestamp: "2023-06-01T12:30:00Z", pageId: "contact", customerId: "125" }
];
  
const logDay2 = [
    { timestamp: "2023-06-02T12:00:00Z", pageId: "home", customerId: "123" },
    { timestamp: "2023-06-02T12:10:00Z", pageId: "products", customerId: "123" },
    { timestamp: "2023-06-02T12:20:00Z", pageId: "services", customerId: "124" },
    { timestamp: "2023-06-02T12:30:00Z", pageId: "contact", customerId: "126" }
];

function loyalCustomers(logDay1, logDay2) {
    const logMap = new Map();
    let outputCustomers = [];

    // Track the visits for day 1
    logDay1.forEach(item => {
        // If the logmap doesn't already have an entry for the customerId...
        if (!logMap.has(item.customerId)) {
            // Add the customerId as the key, and a Set as the value which will hold the pageIds
            // Sets are like arrays but they only can have unique elements
            logMap.set(item.customerId, new Set());
        }
        // Add the pageId to the Set
        logMap.get(item.customerId).add(item.pageId);
    });

    /*
        The map will look like this: 

        {
            123 => Set { "home", "products" }
            124 => Set { "about" }
            125 => Set { "contact" }
        }
    */

    // Loop through day 2 and find loyal customers
    for (const item of logDay2) {
        const customerId = item.customerId;
        const pageId = item.pageId;

        if (logMap.has(customerId)) {
            // We know that the customer came on both days
            // We need to get the pages that the customer visited from day 1
            const pageDay1 = logMap.get(customerId);

            // Create a set of all unique pages visited from both days
            const allPages = new Set([pageDay1, pageId]);

            // console.log(`Customer ${customerId} visited these pages on Day 1:`, Array.from(pageDay1));
            // console.log(`Customer ${customerId} visited page on Day 2:`, pageId);

            // Check if they visited 2 different pages on either day 1 or day 2
            if ((pageDay1.size >= 2 && pageDay1.values().next().value !== pageId)) {
                // Add it to the array of the customers we want to return
                outputCustomers.push(customerId);
            }
        }
    }

    console.log(outputCustomers);
}

loyalCustomers(logDay1, logDay2);