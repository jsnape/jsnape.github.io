<script>
    export let site = {};

    function handleSubmit(event) {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        const query = encodeURIComponent(searchInput.value) + "+site%3A" + site;

        window.location.href = "https://www.bing.com/search?q=" + query;
    }
</script>

<div class="space-x-6 my-5 uppercase">Search</div>
<form on:submit={handleSubmit} id="searchForm" action="https://www.bing.com/search" method="get">
    <input id="searchInput" type="text" name="q" placeholder="Search with Bing">
    <input class="ml-1" type="submit" style="font-family: FontAwesome" value="&#xf002;" >
</form>
