import { A } from "@solidjs/router";
import { ParentComponent, Show, createSignal } from "solid-js";
import ferrari from "../../assets/images/cars/about2.webp";
import Line from "../user/components/Line";
import "../user/components/underline.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const Shop: ParentComponent = () => {
  const [openDropdown, setOpenDowndown] = createSignal(false);

  const toggleDropdown = () => {
    setOpenDowndown(!openDropdown());
  };
  const closeDropdown = () => {
    setOpenDowndown(false);
  };
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveSmallScreens() ? (
        <>
          <div class="w-11/12 flex mx-auto mt-20 justify-between">
            <div class="flex gap-20">
              <h1 class="font-loubag text-5xl flex items-center uppercase">
                Collections
              </h1>
              <p class="font-mabry flex items-center font-medium">
                / &nbsp; Welcome to Luxury Garage
              </p>
            </div>

            <A href="/collections">
              <button class="border border-yellow-200 px-7 py-3 rounded-full font-mabry font-medium">
                View All
              </button>
            </A>
          </div>
          <Line />
          <img
            src={ferrari}
            class="rounded-md w-11/12 flex mx-auto saturate-150"
          />
          <Line />
          <div class="justify-between w-11/12 mx-auto flex mt-4">
            <div class="w-1/5">
              <h1 class="font-loubag text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">
                360+
              </h1>
              <p class="font-mabry">
                We have already completed 100+ service centers around the globe
              </p>
            </div>
            <hr class="w-[4px] h-[125px] rounded-full bg-yellow-300" />
            <div class="w-1/5">
              <h1 class="font-loubag text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">
                20+
              </h1>
              <p class="font-mabry">
                We have achived 20+ international rewards for our collection and
                services
              </p>
            </div>
            <hr class="w-[4px] h-[125px] rounded-full bg-yellow-300" />
            <div class="w-1/5">
              <h1 class="font-loubag text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">
                $34K+
              </h1>
              <p class="font-mabry">
                We have already turned over 34K dollars for our company
              </p>
            </div>
          </div>
          <Line />
        </>
      ) : (
        <>
          <Line />
          <div class="w-11/12 flex mx-auto justify-between">
            <div class="">
              <h1 class="font-loubag text-2xl flex items-center uppercase">
                Collections
              </h1>
              <p class="font-mabry-regular flex items-center text-xs">
                / &nbsp; Welcome to Luxury Garage
              </p>
            </div>

            <div>
              <button
                class="border border-yellow-200 text-sm px-4 py-2 rounded-3xl font-mabry-regular"
                onClick={toggleDropdown}
              >
                View All
              </button>
              <div class="relative">
                <Show when={openDropdown()}>
                  <div class="w-24 -ml-[0.75rem] p-2 z-20 mt-2 rounded-md absolute bg-white/10 border border-white/10 backdrop-blur-sm">
                    <div class="grid gap-1">
                      <A href="/collections" class="text-white text-sm font-mabry-regular text-center py-1 bg-gray-300/10 hover:bg-gray-300/30 rounded-md">Collections</A>
                      <A href="/search" class="text-white text-sm font-mabry-regular text-center py-1 bg-gray-300/10 hover:bg-gray-300/30 rounded-md">Search</A>
                    </div>
                  </div>
                </Show>
              </div>
            </div>
          </div>

          <img
            src={ferrari}
            class="rounded-md w-11/12 flex mx-auto saturate-150 mt-4"
          />
          <div class="justify-between w-11/12 mx-auto mt-4">
            <div class="bg-white filter backdrop-blur-sm py-3 rounded-xl bg-opacity-10 mb-3">
              <h1 class="font-loubag text-2xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent text-center">
                360+
              </h1>
              <p class="font-mabry-regular text-sm text-center">
                We have already completed 100+ service centers around the globe
              </p>
            </div>

            <div class="bg-white filter backdrop-blur-sm py-3 rounded-xl bg-opacity-10 mb-3">
              <h1 class="font-loubag text-2xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent text-center">
                20+
              </h1>
              <p class="font-mabry-regular text-sm text-center">
                We have achived 20+ international rewards for our collection and
                services
              </p>
            </div>

            <div class="bg-white filter backdrop-blur-sm py-3 rounded-xl bg-opacity-10 mb-3">
              <h1 class="font-loubag text-2xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent text-center">
                $34K+
              </h1>
              <p class="font-mabry-regular text-sm text-center">
                We have already turned over 34K dollars for our company
              </p>
            </div>
          </div>
          <Line />
        </>
      )}
    </>
  );
};

export default Shop;
