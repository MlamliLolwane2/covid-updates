<template>
  <div
      class="modal fade"
      id="contact"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createLinkTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title font-weight-light" id="exampleModalLongTitle">Contact Details</h5>
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
              - If you have viewed the app and want to get in touch with me then you can reach me on the 
               contact channels below.
              <br/> <br/>

              Contact Details
              <br/>
              Email Address: <a href="mailto:mrlolwane96@gmail.com"> <u> mrlolwane96@gmail.com </u> </a> <br/>
              Cellphone Number: 061 870 1167
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
    name: 'Contact'
}
</script>

<style>

</style>