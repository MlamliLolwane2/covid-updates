<template>
  <div
    class="modal fade"
    id="about"
    tabindex="-1"
    role="dialog"
    aria-labelledby="createLinkTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title font-weight-lighter" id="exampleModalLongTitle">About Covid Updates</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p style="font-weight:200; color:grey">
            Covid Updates is a real time application that shows the latest corona virus pandemic statistics.

            <br/> <br/>Where is the data sourced? <br/> <br/>

            The data is sourced from the <a href="https://covid19api.com/" target="_blank"> <u> Covid 19 API </u> </a>
            and utilizes a webhook on the backend to get updated data rather than continuously polling
            for new data from the API.

            <br/><br/>How the application works: <br/><br/>
            
            The application polls the API for new data every 10 minutes and if new data is returned,
            the application will update the user interface with the new data without the user 
            needing to refresh the application.

            <br/><br/>Technologies Used: <br/><br/>

            - Vue JS 2 <br/>
            - Axios <br/>
            - Bootstrap 4  
          </p>
          <div class="text-center">
            <button
              type="button"
              class="btn btn-sm btn-secondary rounded-0"
              data-dismiss="modal"
            >Dismiss Notification</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>