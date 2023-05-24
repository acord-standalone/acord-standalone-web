<script>
  import { onMount } from "svelte";
  import { getOS } from "../utils/get-os.js";

  /** @type {"macos" | "windows" | "ios" | "android" | "linux"} */
  let platform = "";

  const urlMap = {
    windows:
      "https://github.com/acord-standalone/installer/releases/download/0.0.2/AcordStandaloneInstaller.exe",
    macos:
      "https://github.com/acord-standalone/macos-installer/releases/download/v0.0.1/acord-macos-installer",
  };

  let url = "";

  onMount(() => {
    platform = getOS();
    url = urlMap[platform];
  });
</script>

<div class="card">
  <div class="top">
    <div class="logo">
      <svg viewBox="0 0 118 215" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_83)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.4775 159.485H79.4246V211.926H38.4775V159.485Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.830278 188.404C0.830278 188.404 13.9289 142.45 14.1246 142.532C30.6039 149.404 37.1124 170.117 37.1124 170.117L29.6241 196.928C29.6241 196.928 25.1517 216.713 18.0037 214.225C-3.07894 206.886 0.830278 188.404 0.830278 188.404Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M117.141 188.62C117.141 188.62 104.042 142.665 103.845 142.747C87.3658 149.619 80.8574 170.333 80.8574 170.333L88.3457 197.144C88.3457 197.144 92.8183 216.929 99.966 214.441C121.049 207.102 117.141 188.62 117.141 188.62Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.7391 9.0589C46.7391 9.0589 48.8337 0.162904 59.2387 0.151122C70.851 0.137904 71.7383 9.0589 71.7383 9.0589C71.7383 9.0589 100.391 131.393 100.186 131.469C69.9668 142.634 79.2094 157.33 79.2094 157.33H38.837C38.837 157.33 47.989 142.414 17.8607 131.325C17.4653 131.18 46.7391 9.0589 46.7391 9.0589Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M98.9447 98.424C100.998 98.4241 102.967 99.2396 104.418 100.691C105.87 102.143 106.686 104.111 106.686 106.164C106.686 109.748 103.776 112.915 100.472 113.797C99.8326 113.967 99.008 108.194 98.8916 108.194C98.8083 108.194 94.9104 108.698 94.4377 108.769C93.636 108.887 92.7237 106.775 93.863 105.895C94.1403 105.681 97.6876 104.895 98.0295 104.889C98.1186 104.888 96.975 98.9099 97.0238 98.7113C97.1488 98.2004 98.281 98.424 98.9447 98.424Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.6784 60.3505C91.7313 60.3505 93.7002 61.166 95.1519 62.6176C96.6036 64.0692 97.4193 66.0379 97.4195 68.0909C97.4195 71.674 94.5101 74.8417 91.2056 75.7235C90.5663 75.8938 89.7416 70.1203 89.6252 70.1203C89.5419 70.1203 85.644 70.6246 85.1713 70.695C84.3696 70.8139 83.4573 68.7013 84.5966 67.8215C84.8739 67.6073 88.4212 66.8217 88.7632 66.8158C88.8523 66.8142 87.7086 60.8364 87.7575 60.6378C87.8825 60.1269 89.0146 60.3505 89.6784 60.3505Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M81.277 23.0671C83.3298 23.0672 85.2984 23.8828 86.7499 25.3344C88.2013 26.786 89.0167 28.7547 89.0167 30.8075C89.0167 34.3906 86.1088 37.5583 82.8028 38.4402C82.1649 38.6104 81.3402 32.8369 81.2224 32.8369C81.1391 32.8369 77.2426 33.3412 76.7685 33.4116C75.9683 33.5306 75.0559 31.418 76.1938 30.5381C76.4711 30.3239 80.0184 29.5383 80.3604 29.5324C80.4494 29.5308 79.3058 23.553 79.3546 23.3544C79.4796 22.8435 80.6118 23.0671 81.277 23.0671Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.319 98.46C17.2661 98.46 15.2973 99.2755 13.8457 100.727C12.3941 102.179 11.5786 104.148 11.5786 106.2C11.5786 109.784 14.4873 112.951 17.7925 113.833C18.4306 114.003 19.2558 108.23 19.3729 108.23C19.4557 108.23 23.3527 108.734 23.8268 108.805C24.6274 108.923 25.5403 106.811 24.4015 105.931C24.1242 105.717 20.5768 104.931 20.235 104.925C20.1459 104.924 21.2894 98.9459 21.2407 98.7474C21.1152 98.2365 19.9831 98.46 19.319 98.46Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.5856 60.3864C26.5328 60.3864 24.5639 61.2019 23.1123 62.6535C21.6607 64.1052 20.8452 66.074 20.8452 68.1269C20.8452 71.7099 23.7539 74.8777 27.0591 75.7595C27.6972 75.9298 28.5224 70.1562 28.6395 70.1562C28.7223 70.1562 32.6193 70.6605 33.0934 70.7309C33.894 70.8499 34.8069 68.7373 33.6681 67.8575C33.3908 67.6433 29.8434 66.8576 29.5016 66.8518C29.4125 66.8502 30.556 60.8723 30.5073 60.6738C30.3818 60.1629 29.2497 60.3864 28.5856 60.3864Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.9897 23.1031C34.9368 23.1031 32.968 23.9186 31.5164 25.3702C30.0648 26.8219 29.2493 28.7907 29.2493 30.8435C29.2493 34.4266 32.1579 37.5943 35.4632 38.4762C36.1014 38.6465 36.9265 32.8729 37.0436 32.8729C37.1265 32.8729 41.0233 33.3772 41.4975 33.4476C42.298 33.5666 43.2109 31.454 42.0722 30.5742C41.7949 30.3599 38.2474 29.5743 37.9056 29.5684C37.8165 29.5669 38.96 23.589 38.9113 23.3905C38.786 22.8796 37.6538 23.1031 36.9897 23.1031Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_83">
            <rect
              width="116.879"
              height="214.505"
              fill="currentColor"
              transform="translate(0.544189 0.151138)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="info">
      <div class="title">Acord</div>
      <div class="description">
        Fix Discord’s sloppy jobs and breathe new life to the client.
      </div>
    </div>
  </div>
  <div class="bottom">
    <a
      class="button"
      href={url || "#"}
      class:unsupported={!url}
      title={url
        ? "Download"
        : "Your platform currently not supported on Acord."}
    >
      <svg viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_450_2"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="79"
          height="79"
        >
          <rect
            x="0.389404"
            y="0.151794"
            width="78.1269"
            height="78.1269"
            fill="currentColor"
          />
        </mask>
        <g mask="url(#mask0_450_2)">
          <path
            d="M19.9212 65.2576C18.1308 65.2576 16.5981 64.6201 15.3231 63.3451C14.0481 62.0701 13.4106 60.5374 13.4106 58.747V48.9811H19.9212V58.747H58.9847V48.9811H65.4952V58.747C65.4952 60.5374 64.8578 62.0701 63.5828 63.3451C62.3078 64.6201 60.7751 65.2576 58.9847 65.2576H19.9212ZM39.4529 52.2364L23.1765 35.96L27.7339 31.2398L36.1977 39.7036V13.173H42.7082V39.7036L51.172 31.2398L55.7294 35.96L39.4529 52.2364Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </a>
  </div>
</div>

<style lang="scss">
  .card {
    width: 18.75rem;
    height: 25rem;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: whitesmoke;

    & > .top {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      & > .logo {
        svg {
          width: 4.5rem;
        }
      }

      & > .info {
        display: flex;
        gap: 0.25rem;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 2rem;
          font-weight: 600;
        }

        .description {
          width: 100%;
          text-align: center;
        }
      }
    }

    & > .bottom {
      display: flex;
      align-items: flex-end;
      justify-content: center;

      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgb(230, 230, 230);
        border-radius: 0.5rem;
        color: white;

        &.unsupported {
          opacity: 0.5;
          cursor: not-allowed;
        }

        svg {
          width: 50px;
        }
      }
    }
  }
</style>
