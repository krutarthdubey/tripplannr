import Tour from '../models/Tour.js'; // Make sure to import your Tour model here
import tourData from './tour.js';


async function migrateToursData() {
    try {
        // Check if any data already exists in the Tour collection
        const existingToursCount = await Tour.countDocuments();
        
        // If no data exists, insert the toursData into the Tour collection
        if (existingToursCount === 0) {
            await Tour.insertMany(tourData);
            console.log("Tours data migrated successfully!");
        } else {
            console.log("Tours data already exists in the database. Skipping migration.");
        }
    } catch (error) {
        console.error("Error migrating tours data:", error);
    }
}

export default migrateToursData;