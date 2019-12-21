<template>

  <div>
    <header>
      <div class="logo" :style="{backgroundImage:`url(${logo})`}">

      </div>
      <nav>
        <ul>
          <li>
            <NuxtLink :to="$i18n.path('about')">
              {{ $t('links.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$i18n.path('rooms')">
              {{ $t('links.rooms') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$i18n.path('contact')">

              {{ $t('links.contact') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="lang">
        <NuxtLink v-if="$i18n.locale === 'en'" :to="`/ka` + $route.fullPath" class="active" exact>
          {{ $t('links.georgian') }}
        </NuxtLink>
        <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="active">
          {{ $t('links.english') }}
        </NuxtLink>
      </div>
    </header>
    <!--<a href="   " class="booking">
            <span>
                book
            </span>
      <span>
                now
            </span>
    </a>-->
    <Nuxt/>
  </div>
</template>

<script>
    import logo from '~/assets/images/logo.svg'

    export default {
        data() {
            return {
                logo
            }
        }
    }
</script>

<style>
  .nuxt-link-active {
    color: #a41453;
  }

  .nuxt-link:hover {
    color: #a41453;
  }

</style>
