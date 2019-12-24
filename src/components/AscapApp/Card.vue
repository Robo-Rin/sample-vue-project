<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-header">
        <div class="card-header-icon">
          <slot name="icon" />
        </div>
        <div class="card-header-title">
          {{ title }}
        </div>
      </div>
      <div class="card-content">
        <div class="card-content-description">
          {{ description }}
        </div>
        <div class="card-content-fee">
          <div class="card-content-fee-text">
            {{ `$${fee} APPLICATION FEE` }}
          </div>
          <div class="card-content-fee-subtext">
            {{ `non-refundable` }}
          </div>
        </div>
        <div class="card-content-requirements">
          <div class="card-content-requirements-text">
            {{ `Requirements` }}
          </div>
          <template v-for="(requirement, index) in requirements">
            <div class="card-content-requirements-requirement" :key="`${requirement}-${index}`">
              <div class="card-content-requirements-requirement-checkmark">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="ascap-svg-checkmark"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div class="card-content-requirements-requirement-text">
                {{ requirement }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    requirements: {
      type: Array,
      default: () => [
        'Legal Name',
        'Mailing Address',
        'Valid Email Address',
        'SSN/ITIN or EIN',
        'Must be 18 or older*',
      ],
    },
  },
};
</script>

<style lang='scss' scoped>
.card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: center;
  margin-bottom: 1rem;

  &:first-child {
    padding-right: 0.9375rem;
  }

  &:not(:first-child) {
    padding: 0 0.9375rem;
  }

  &-inner {
    border: 1px solid #85868c;
    max-width: 20.4788rem;
  }

  &-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: #004183;
    padding: 1.5rem;
    border-bottom: 1px solid #85868c;

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }

    &-title {
      font-size: 1.25rem;
      line-height: 1.3;
    }
  }

  &-content {
    display: flex;
    flex-flow: column nowrap;
    font-size: 1rem;
    line-height: 1.5;
    padding: 1.5rem;

    & > div:not(:last-child) {
      margin-bottom: 1rem;
    }

    &-fee {
      &-text {
        font-family: "Circular Bold", sans-serif;
        color: #175da7;
      }
      &-subtext {
        color: #6d6d6d;
      }
    }

    &-requirements {
      margin-bottom: 0.5rem;
      text-align: left;

      &-text {
        font-family: "Circular Medium",sans-serif;
        font-weight: 500;
        margin-bottom: 1rem;
      }

      &-requirement {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem;
      }
    }
  }
}

.ascap-svg-checkmark {
  width: 1.1299rem;
  height: 1.1299rem;
  stroke-width: 0.125rem;
  vertical-align: sub;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
