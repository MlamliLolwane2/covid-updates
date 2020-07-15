<template>
  <div
    class="modal fade"
    id="error"
    tabindex="-1"
    role="dialog"
    aria-labelledby="createLinkTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title font-weight-light" id="exampleModalLongTitle">Could Not Get Data</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            id="closeLogin"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p style="color:grey" class="font-weight-light">
            An error occured while we attempted to fetch new data. Please ensure that you
            have a working internet connection and then try again.
          </p>
          <div class="text-center">
            <button
              type="button"
              class="btn btn-md btn-secondary rounded-0 mx-auto"
              data-dismiss="modal"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style>
</style>

<script>
export default {};
</script>

<style>
</style>