
const Base_URL = "https://api.quotable.io/random"; //its outside for better performance and not having to redefine everytime function is called

async function APIService() {

  

  try {
    const response = await fetch(`${Base_URL}`);
    const data = await response.json();
    console.log( data);
    return data;
  } catch (error) {
    console.error('Error fetching random quote:', error);
    throw error;
  }
}

export default APIService; 
