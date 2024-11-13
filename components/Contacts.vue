<template>
  <ActiveSection :section-name="'contacts'">
    <!--
        Conacts Info
      -->
    <div class="content contacts">
      <!-- title -->
      <div class="title">Get in Touch</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="map" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486135.4257468699!2d-119.82302697037079!3d36.82646868986618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945d701e55619b%3A0xa9d36a4f757b37de!2sApple%20Fashion%20Fair!5e0!3m2!1sen!2sbd!4v1663003810570!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="info-list">
            <ul>
              <li><strong>Address . . . . .</strong> California, USA</li>
              <li><strong>Email . . . . .</strong> adlard@example.com</li>
              <li><strong>Phone . . . . .</strong> +123 654 78900</li>
              <li><strong>Freelance . . . . .</strong> Available</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!--
        Contact Form
      -->
    <div class="content contacts">
      <!-- title -->
      <div class="title">Contact Form</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="contact_form">
            <form id="cform" method="post">
              <div class="row">
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                </div>
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col col-d-12 col-t-12 col-m-12">
                  <div class="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="align-left">
                <a href="#" class="button">
                  <span class="text">Send Message</span>
                  <span class="arrow"></span>
                </a>
              </div>
            </form>
            <div class="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </ActiveSection>
</template>
