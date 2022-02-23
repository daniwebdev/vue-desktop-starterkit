<template>
  <div class="grid gap-4 p-4 grid-cols-4">
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <!-- <slot name="header"></slot> -->
        Card Header
      </div>
      <div class="card-body">
        <!-- <slot></slot> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
        similique!
      </div>
      <div class="card-footer">
        <!-- <slot name="footer"></slot> -->
        Card Footer
      </div>
    </div>
  </div>

  <div class="grid gap-4 grid-cols-4 p-4">
    <div class="widget">
      <div class="widget-content">
        <h1>Users</h1>
        <h2>2345</h2>
      </div>
      <div class="widget-icon">
        <i class="fas fa-users"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Orders</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <i class="fas fa-cart-plus" aria-hidden="true"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Visitors</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <i class="fa fa-chart-pie"></i>
      </div>
    </div>

    <div class="widget">
      <div class="widget-content">
        <h1>Visitors</h1>
        <h2>344</h2>
      </div>
      <div class="widget-icon">
        <i class="fa fa-chart-pie"></i>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 p-4">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="custom-tabs-four-home-tab"
              data-toggle="pill"
              href="#custom-tabs-four-home"
              role="tab"
              aria-controls="custom-tabs-four-home"
              aria-selected="false"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="custom-tabs-four-profile-tab"
              data-toggle="pill"
              href="#custom-tabs-four-profile"
              role="tab"
              aria-controls="custom-tabs-four-profile"
              aria-selected="false"
              >Profile</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="custom-tabs-four-messages-tab"
              data-toggle="pill"
              href="#custom-tabs-four-messages"
              role="tab"
              aria-controls="custom-tabs-four-messages"
              aria-selected="false"
              >Messages</a
            >
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content" id="custom-tabs-four-tabContent">
          <div class="tab-pane fade show" id="custom-tabs-four-home" role="tabpanel" aria-labelledby="custom-tabs-four-home-tab">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada lacus ullamcorper dui molestie, sit amet congue quam
            finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio
            magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin
            pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin id orci eu lectus blandit suscipit.
            Phasellus porta, ante et varius ornare, sem enim sollicitudin eros,
            at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor
            porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus
            pulvinar non consequat neque. Mauris lacus elit, condimentum ac
            condimentum at, semper vitae lectus. Cras lacinia erat eget sapien
            porta consectetur.
          </div>
          <div class="tab-pane fade" id="custom-tabs-four-profile" role="tabpanel" aria-labelledby="custom-tabs-four-profile-tab">
            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum.
            Mauris pharetra purus ut ligula tempor, et vulputate metus
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus
            interdum, nisl ligula placerat mi, quis posuere purus ligula eu
            lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere
            nec nunc. Nunc euismod pellentesque diam.
          </div>
          <div class="tab-pane fade" id="custom-tabs-four-messages" role="tabpanel" aria-labelledby="custom-tabs-four-messages-tab"
          >
            Morbi turpis dolor, vulputate vitae felis non, tincidunt congue
            mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus
            faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac
            tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum.
            Suspendisse ut velit condimentum, mattis urna a, malesuada nunc.
            Curabitur eleifend facilisis velit finibus tristique. Nam vulputate,
            eros non luctus efficitur, ipsum odio volutpat massa, sit amet
            sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida
            fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel
            metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare
            magna.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
    &.nav-tabs {
        .nav-item {
            @apply mr-2 inline-block mt-3;
            
            .nav-link {
                @apply border dark:border-gray-700 p-3 rounded-t-lg;
                border-bottom: 0;
                &.active {
                    @apply bg-gray-900;
                }
            }
        }
    }
}
.tab-content {
    @apply p-1;
    .tab-pane {
        @apply hidden;
        &.show {
            @apply block;
        }
    }
}
.card {
  @apply rounded-sm rounded-lg shadow-md;
  @apply bg-white;
  @apply dark:bg-gray-900;

  .card-header {
    @apply p-3 rounded-t-lg;
    @apply bg-gray-200;
    @apply text-gray-700;
    @apply font-semibold;
    @apply text-sm;

    @apply dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700;
  }
  .card-body {
    @apply p-3;

    @apply dark:text-gray-500;
    @apply font-normal;
    @apply text-sm rounded-b-lg;
  }
  .card-footer {
    @apply p-3 rounded-b-lg;
    @apply bg-gray-200;
    @apply text-gray-700;
    @apply font-semibold;
    @apply text-sm;

    @apply dark:bg-gray-800 dark:text-gray-200 border-t dark:border-gray-700;
  }
}

//
.widget {
  @apply flex p-4 rounded-lg;
  @apply text-gray-700 bg-gray-200;
  @apply dark:bg-gray-900 dark:text-gray-200;

  .widget-content {
    @apply flex-1;
    // @apply font-semibold;
    @apply text-sm;

    h1 {
      @apply text-lg;
    }

    h2 {
      @apply text-4xl;
    }
  }
  .widget-icon {
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply text-center;
    @apply font-semibold;
    @apply text-sm;
    min-width: 100px;
    width: 100px;
    font-size: 3rem;
    transition: all 0.2s ease;
    @apply dark:bg-gray-900 dark:text-gray-500;
  }
  &:hover {
    .widget-icon {
      font-size: 3.3rem;
    }
  }
}
</style>

<script>
export default {
    mounted() {
        document.querySelector('.nav .nav-tabs .nav-link').forEach(el => {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.add('active');
            })
        })
    }
}
</script>