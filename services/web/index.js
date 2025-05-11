(() => {
	async function requestHealthCheck() {
		try {
            const response = await fetch('/api/health');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
	}

    // Function to handle route change
    function handleRouteChange() {
        const path = window.location.pathname;
        console.log(`Route changed to: ${path}`);
    }

    // Set initial route

    // Register route chnage event listener
    window.addEventListener('popstate', () => {
        handleRouteChange();
    });

    requestHealthCheck();
    handleRouteChange();
})();