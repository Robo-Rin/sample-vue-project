<template>
  <div class="membership">
    <div class="membership-text">
      {{ `Membership` }}
    </div>
    <div class="membership-subtext" id="selectMembershipErrorAnchor">
      {{ `Select your membership type below:` }}
    </div>
    <Cards>
      <input type="radio" name="membership" id="writerPublisher" value="writerPublisher" v-model="selectedCard">
      <label
        for="writerPublisher"
        @mouseover="hoveringCard = `writerPublisher`"
        @mouseleave="hoveringCard = null"
      >
        <Card
          :title="`Writer & Publisher`"
          :description="`ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.`"
          :fee="100"
          :selected="selectedCard === `writerPublisher`"
          :should-select-dim="selectedCard !== null && selectedCard !== `writerPublisher`"
          :hovering="hoveringCard === `writerPublisher`"
          :should-hover-dim="hoveringCard !== null && hoveringCard !== `writerPublisher`"
          :error="selectMembershipError"
        >
          <template #icon>
            <svg id="quavers-and-briefcases" xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="40px" height="29px" viewBox="-24.652 -22.871 40 27" class="ascap-svg-icon">
              <g transform="translate(15, 7)"><path d="M-16.564-16.8h3.777h10.173c1.084,0,1.962,0.879,1.962,1.961v9.425c0,1.083-0.877,1.962-1.962,1.962h-15.689c-1.083,0-1.961-0.879-1.961-1.962v-3.697"></path><path d="M-6.536-3.452v-15.254c0-1.054-0.878-1.907-1.961-1.907h-3.924c-1.083,0-1.96,0.854-1.96,1.907v15.254"></path></g><path d="M-17.523-7.893h-4.085c-1.129,0-2.043,0.915-2.043,2.043c0,1.128,0.915,2.042,2.043,2.042h2.043c1.128,0,2.042-0.914,2.042-2.042V-7.893z M-5.265-9.936h-4.086c-1.128,0-2.042,0.914-2.042,2.042c0,1.128,0.914,2.043,2.042,2.043h2.043c1.128,0,2.043-0.916,2.043-2.043V-9.936z"></path><polyline points="-17.523,-7.893 -17.523,-20.151 -5.265,-22.194 -5.265,-9.936 "></polyline>
            </svg>
          </template>
        </Card>
      </label>
      <input type="radio" name="membership" id="writer" value="writer" v-model="selectedCard">
      <label
        for="writer"
        @mouseover="hoveringCard = `writer`"
        @mouseleave="hoveringCard = null"
      >
        <Card
          :title="`Writer`"
          :description="`A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.`"
          :fee="50"
          :requirements="[
            'Legal Name',
            'Mailing Address',
            'Valid Email Address',
            'SSN/ITIN',
            'Must be 18 or older*',
          ]"
          :selected="selectedCard === `writer`"
          :should-select-dim="selectedCard !== null && selectedCard !== `writer` && hoveringCard !== `writer`"
          :hovering="hoveringCard === `writer`"
          :should-hover-dim="hoveringCard !== null && hoveringCard !== `writer`"
          :error="selectMembershipError"
        >
          <template #icon>
            <svg id="quavers" xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="22px" height="29px" viewBox="-26.663 -25.084 22 21.999" aria-hidden="true" class="ascap-svg-icon"><path fill="none" d="M-18.997-8.528h-4.443c-1.228,0-2.223,0.996-2.223,2.223c0,1.227,0.996,2.221,2.223,2.221h2.223c1.227,0,2.221-0.994,2.221-2.221V-8.528z M-5.663-10.75h-4.445c-1.227,0-2.221,0.994-2.221,2.221s0.994,2.223,2.221,2.223h2.223c1.227,0,2.222-0.997,2.222-2.223V-10.75z"></path><polyline fill="none" points="-18.997,-8.528 -18.997,-21.862 -5.663,-24.084 -5.663,-10.75 "></polyline></svg>
          </template>
        </Card>
      </label>
      <input type="radio" name="membership" id="publisher" value="publisher" v-model="selectedCard">
      <label
        for="publisher"
        @mouseover="hoveringCard = `publisher`"
        @mouseleave="hoveringCard = null"
      >
        <Card
          :title="`Publisher`"
          :description="`A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.`"
          :fee="50"
          :selected="selectedCard === `publisher`"
          :should-select-dim="selectedCard !== null && selectedCard !== `publisher`"
          :hovering="hoveringCard === `publisher`"
          :should-hover-dim="hoveringCard !== null && hoveringCard !== `publisher`"
          :error="selectMembershipError"
        >
          <template #icon>
            <svg id="briefcase" xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="26" height="29" viewBox="0 0 24 24" aria-hidden="true" class="ascap-svg-icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </template>
        </Card>
      </label>
    </Cards>
    <div class="membership-selectMembershipError">
      <span v-show="selectMembershipError" class="membership-selectMembershipError-text">
        {{ `Please select your membership type.` }}
      </span>
    </div>
    <div class="membership-readMore">
      <span>{{ `*If you are under 18 years of age please ` }}</span>
      <a class="link" href="https://ome.ascap.com/helpcenter#underAge" target="_blank" rel="noreferrer noopener">read more about how to join ASCAP.</a>
    </div>
    <div v-show="selectedPublisher" class="membership-publisherType">
      <div class="membership-publisherType-title">
        {{ `Publisher Company Type` }}
      </div>
      <div class="membership-publisherType-instructions">
        {{ `Please select the federal tax classification of your publisher company.` }}
      </div>
      <div class="membership-publisherType-dropdown">
        <label id="selectPublisherTypeErrorAnchor" class="membership-publisherType-dropdown-label" :class="{ selectedPublisherType }">
          {{ `Publisher Company Type` }}
        </label>
        <select
          class="membership-publisherType-dropdown-select"
          :class="{ error: selectPublisherTypeError }"
          v-model="selectedPublisherType"
        >
          <option>Individual / Sole proprietor or Single-member LLC</option>
          <option>C Corporation</option>
          <option>S Corporation</option>
          <option>LLC - C Corporation</option>
          <option>LLC - S Corporation</option>
          <option>LLC - Partnership</option>
          <option>Partnership</option>
          <option>Trust / Estate</option>
          <option>OTHER</option>
        </select>
      </div>
      <div v-show="selectPublisherTypeError" class="membership-publisherType-dropdown-selectPublisherTypeError">
        {{ `Please select your publisher company type.` }}
      </div>
    </div>
    <div class="membership-policy">
      {{ `ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application. Any information
      processed by TINCheck and SmartyStreets shall be subject to the privacy policies of ` }}
      <a class="link" href="https://www.tincheck.com/pages/tincheck-agreement" target="_blank" rel="noreferrer noopener">TINCheck</a>
      {{ ` and ` }}
      <a class="link" href="https://smartystreets.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener">SmartyStreets</a>.
    </div>
    <div class="membership-buttons">
      <button class="membership-buttons-button cancel" @click="handleCancelClick">CANCEL</button>
      <button class="membership-buttons-button continue" @click="handleContinueClick">CONTINUE</button>
    </div>
  </div>
</template>

<script>
import Cards from './Cards';
import Card from './Card';

export default {
  name: 'Membership',
  components: {
    Cards,
    Card,
  },
  data() {
    return {
      selectMembershipError: false,
      selectPublisherTypeError: false,
      selectedCard: null,
      hoveringCard: null,
      selectedPublisherType: null,
    };
  },
  computed: {
    selectedPublisher() {
      return ['writerPublisher', 'publisher'].includes(this.selectedCard);
    },
  },
  methods: {
    handleCancelClick() {
      window.location = 'https://www.ascap.com';
    },
    handleContinueClick() {
      if (this.selectedCard === null) {
        this.selectMembershipError = true;

        // Scroll cards and instructions into view
        this.scrollToId('selectMembershipErrorAnchor');
      } else if (this.selectedPublisherType === null) {
        this.selectMembershipError = false;
        this.selectPublisherTypeError = true;

        // Scroll dropdown and instructions into view
        this.scrollToId('selectPublisherTypeErrorAnchor');
      } else {
        this.selectMembershipError = false;
        this.selectPublisherTypeError = false;
      }
    },
    scrollToId(id) {
      try {
        // First try smooth scroll
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        // Fallback to regular scroll
        document.getElementById(id).scrollIntoView();
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.membership {
  text-align: left;
  width: 71.25rem;
  height: 104.6462rem;
  margin-left: 0.625rem;
  padding-left: 3.125rem;

  &-text {
    font-size: 1.5rem;
    margin-bottom: 0.495rem;
    font-family: "Circular Black",sans-serif;
  }

  &-subtext {
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
  }

  &-selectMembershipError {
    display: inline-block;
    line-height: 1.3;
    margin-top: 0.5625rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #cd3533;
  }

  &-readMore {
    font-size: 0.875rem;
    margin-bottom: 0.875rem;
  }

  &-publisherType {
    margin: 2.5rem 0;

    &-title {
      font-family: "Circular Bold", sans-serif;
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }

    &-instructions {
      margin-bottom: 1rem;
    }

    &-dropdown {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 3.5rem;
      width: 43.083rem;
      padding: 0 0.9375rem;
      margin: 0 -0.9375rem;

      &-label {
        display: inline-block;
        position: absolute;
        font-size: 1.125rem;
        color: #6d6d6d;
        padding: 0 0.75rem;
        transition: all .3s ease;
        pointer-events: none;

        &.selectedPublisherType {
          font-size: 12px;
          transform: translateX(16px) translateY(-19px);
          background-color: white;
          padding: 0 0.125rem;
        }
      }

      &-select {
        cursor: pointer;
        padding: 0 0.75rem;
        color: #0d0d0d;
        font-family: "Circular Book", sans-serif;
        font-size: 1.125rem;
        width: 100%;
        height: 2.5rem;
        margin: 0.5rem 0;
        background-color: white;

        &.error {
          border-color: #cd3533;
        }
      }

      &-selectPublisherTypeError {
        line-height: 1.3;
        display: inline-block;
        margin-top: 9px;
        color: #cd3533;
      }
    }
  }

  &-policy {
    font-size: 0.875rem;
  }

  &-buttons {
    padding: 1.5rem 0;

    &-button {
      font-family: 'Circular Bold', sans-serif;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.5rem 1.25rem;
      line-height: 1.125rem;
      height: 2.5rem;
      background-color: #fff;
      color: #0d0d0d;
      border: 1px solid #ededed;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;

      &:not(:last-child) {
        margin-right: 0.625rem;
      }

      &:focus {
        outline: none;
      }

      &.cancel {

        &:hover {
          background-color: #fafafa;
          border-color: #cecece;
        }
      }

      &.continue {
        color: white;
        background-color: #1178ce;

        &:hover {
          background-color: #175da7;
        }
      }
    }
  }
}

.ascap-svg-icon {
  vertical-align: sub;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.link {
  color: #175da7;
  transition: all .2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1178ce;
  }
}

input[type="radio"] {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
</style>
