const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
});

//index loading y tracker

/* <div class="tracker">
    <!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <path style="fill:#FF5023;" d="M68.929,323.786C93.366,403.921,167.869,462.222,256,462.222s162.634-58.301,187.071-138.436H68.929z
	" />
      <path style="fill:#BF3C1A;"
        d="M256,320c0,0,0,42.667,0,142.222c88.131,0,162.634-58.301,187.071-138.436L256,320z" />
      <rect x="184.889" y="248.889" style="fill:#1E2E3B;" width="142.222" height="56.889" />
      <path style="fill:#FF5023;" d="M298.667,92.444c0-23.565-19.102-42.667-42.667-42.667c-23.565,0-42.667,19.102-42.667,42.667
	c0,15.791,8.585,29.567,21.333,36.945v34.166h42.667V129.39C290.082,122.011,298.667,108.235,298.667,92.444z" />
      <path style="fill:#BF3C1A;" d="M256,49.778v113.778h21.333V129.39c12.749-7.378,21.333-21.154,21.333-36.945
	C298.667,68.88,279.565,49.778,256,49.778z" />
      <path style="fill:#BFE4F8;" d="M426.667,312.889H384c0-70.579-57.421-128-128-128s-128,57.421-128,128H85.333
	c0-94.107,76.56-170.667,170.667-170.667S426.667,218.782,426.667,312.889z" />
      <path style="fill:#93C7EF;" d="M256,142.222v42.667c70.579,0,128,57.421,128,128h42.667
	C426.667,218.782,350.107,142.222,256,142.222z" />
      <rect x="85.333" y="376.889" style="fill:#1E2E3B;" width="341.333" height="42.667" />
      <path style="fill:#93C7EF;" d="M512,334.222c0,23.563,0,56.889,0,56.889H0c0,0,0-33.326,0-56.889l0,0
	c0-23.563,19.102-42.667,42.667-42.667h426.667C492.898,291.556,512,310.659,512,334.222L512,334.222z" />
      <g>
        <circle style="fill:#FFDA44;" cx="64" cy="341.333" r="21.333" />
        <circle style="fill:#FFDA44;" cx="160" cy="341.333" r="21.333" />
      </g>
      <path style="fill:#5A8BB0;" d="M469.333,291.556H256v99.556h256c0,0,0-33.326,0-56.889C512,310.659,492.898,291.556,469.333,291.556
	z" />
      <circle style="fill:#FFDA44;" cx="256" cy="341.333" r="21.333" />
      <g>
        <path style="fill:#FF9811;" d="M256,320c11.782,0,21.333,9.552,21.333,21.333s-9.552,21.333-21.333,21.333" />
        <circle style="fill:#FF9811;" cx="352" cy="341.333" r="21.333" />
        <circle style="fill:#FF9811;" cx="448" cy="341.333" r="21.333" />
      </g>
    </svg> -->
    <img src="juegoss/dino/auto/img/auto1.png" alt="">
  </div>

<!-- loading -->
  <div class="loader">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <span>Loading...</span>
  </div>



  <script>
    const tracker = document.querySelector(".tracker");
    document.body.addEventListener("mousemove", e => {
      tracker.style.left = `${e.clientX}px`;
      tracker.style.top = `${e.clientY}px`;
    });
  </script> */