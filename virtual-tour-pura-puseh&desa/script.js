(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "start": "this.playAudioList([this.audio_073D7835_1B71_195B_4193_FA51113200D9]); this.init(); this.playList_3FD130CA_2E9B_12F1_41C1_5417AB3D7E78.set('selectedIndex', 0)",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "shadow": false,
 "children": [
  "this.MainViewer",
  "this.IconButton_02647220_1B58_79C0_41B5_C206BA2449B9",
  "this.IconButton_0266C220_1B58_79C0_41AB_F2ED596DDDDE",
  "this.HTMLText_0360DB98_1B48_AEC0_41B0_91A3EAAFCAAA",
  "this.Container_0CF5F0D7_1C3A_FAC5_41B0_DF6C7A3674C5",
  "this.MapViewer",
  "this.Container_035DF984_1B77_AAC1_41AD_BB42A2F9921A",
  "this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741",
  "this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E",
  "this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90",
  "this.Container_3B994CFB_2B05_F927_4170_392B5993BD5E",
  "this.Container_3A0BED01_2B05_98E0_41A6_059674B12563",
  "this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B",
  "this.Container_39957054_2B06_8961_41C2_B10917611B1F",
  "this.Container_3AD6C928_2B0B_7B20_41AE_59CBAA90A901",
  "this.Container_3BECB58A_2B0A_8BE0_41C3_FB6BE08328FF",
  "this.Container_3BEF492F_2B0A_9B20_418E_151B9E09A331",
  "this.Container_39F4DEA0_2B0D_7920_41B1_822F70D2D9EE",
  "this.Container_3BC5C4A3_2B0A_8920_41A0_30960350ECD2",
  "this.Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79",
  "this.Container_38315C2C_2B0A_9920_41C5_5C7EEE37B88C",
  "this.Container_3AC13024_2B0A_8920_41AF_F379FBA07AF0",
  "this.Container_3ADA2C34_2B0A_9920_41A7_375055D9D58E",
  "this.Container_3A33AF86_2B0A_B7E1_41A3_A364B6A78697",
  "this.Container_3A39F450_2B0A_8960_41B1_3C0230264486",
  "this.Container_3ACF182E_2B0A_9920_41A7_1590F1111FBF",
  "this.Container_3ACE0D36_2B0A_BB20_41C0_2D44DDAAADA3",
  "this.Container_3A7D7612_2B0A_88E0_41C3_42321CFBB9C5",
  "this.Container_3A330B8F_2B05_9FE0_41C5_643880718E64",
  "this.Container_3AE178E6_2B06_9920_41C4_DB2932F568C9",
  "this.Container_3A761CF2_2B06_B921_41C1_9CC53AE65EE9",
  "this.Container_39352680_2B06_89E0_41AF_CE797F2B7EE8",
  "this.Container_3AF6F88E_2B06_99E0_41AF_21D483D6030D",
  "this.Container_393690E6_2B06_8920_41B1_0282BB2FAA41",
  "this.Container_3A27A582_2B07_8BE0_41B8_216DB1502149",
  "this.Container_0066AE9A_1BC8_E6C0_41A1_C0491F4EF140",
  "this.Container_0A8EE213_19C8_99C0_41AE_E02524E71AD1",
  "this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714",
  "this.Container_0C2DDD32_19C8_EBC0_4188_ACB701906BFE",
  "this.Container_032EAB9C_1B5F_AEC1_41A7_8EDE9E1FC9D6",
  "this.Container_032A3701_1B5F_E7C3_41AC_140519F0550B"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "class": "Player",
 "propagateClick": false,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.93,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_217E5166_2E9B_13BE_41B3_586BBA452B17"
},
{
 "class": "FadeOutEffect",
 "id": "effect_02654FFC_1B50_F6C9_41AC_052E44D690E4",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D4471F6_2B07_8B20_4178_8960ED5447D8",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1921D9_1471_F355_41B1_B999948786F3_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C527F33_1B5B_A7C0_4190_FE73871F136E",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_0008F020_1B71_0979_419A_52C9B4AFDBB1",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.78,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F57D398_2E9B_1692_41A9_16B7F2780C54"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0D02829C_1B31_0949_41B2_E7D07B199255",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3E963478_2B0E_8920_4195_962952AAA3A6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_03D81FF4_1B50_F6D9_41B4_9209A0ABCA77",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FB642DD_2E9B_1692_41C3_D08E3D492F8D"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0C6686D5_1B5F_16D8_4180_4EF5C83A3AD2",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_0B09E5F6_2B07_8B20_4142_AD48A94F87E0",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C7EDF25_2B05_7720_41B0_1B349C2A7DE3",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EDFF1D3_2E9B_1296_41B2_3AB25E907536"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.7,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E907195_2E9B_1293_41C5_B5B961C45A58"
},
{
 "class": "FadeOutEffect",
 "id": "effect_018715D2_1B51_0AD9_4150_5CCFCF568440",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C2C1BD0_2B0D_BF60_41A9_4CF3AC05BCA0",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CF430EB_2B0F_8920_41C2_C9F9F55C51C6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CCC489B_2BFD_79E7_41C3_002B5A3000AE",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3DD8E796_2B1D_97E0_41A0_7204998D4DD3",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_00E8BBC0_1B73_7F38_41AC_A971A64C5A02",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EE20212_2E9B_1191_41C0_0A22FEB98177"
},
{
 "class": "FadeOutEffect",
 "id": "effect_06A6BFEC_1B71_36C9_41AE_DCA04785CAAF",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.22,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_214BA156_2E9B_139E_41B6_F3FE307AE40D"
},
{
 "class": "FadeInEffect",
 "id": "effect_041BE06A_1BD9_BA40_41BA_94F2F82ECAC4",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CFD073E_2BFD_9721_41C3_131ED3CAB847",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CB6161F_2BFA_88E0_41C4_2076DFD19560",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C66D35F_2B1A_8F60_41BC_2785012961EB",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194548_315",
 "hfovMin": "135%",
 "id": "panorama_1E15065B_1470_B156_41B2_1D767604BB54",
 "overlays": [
  "this.overlay_1B6BF246_14F1_70BE_41A8_FD2F43CBDE7E",
  "this.overlay_1A3EA016_14F0_B0DE_418C_FF62431CE2A2",
  "this.overlay_1A52979B_14F1_5FD6_41AB_9DE8DEA2B4B1",
  "this.overlay_1A36ABD1_14F1_5755_41A7_6F9D6459BD2B",
  "this.overlay_0CCF1807_1471_70BE_41A4_EBA8CB5F1974",
  "this.overlay_3F83E403_2B0B_88E7_41B0_5F7C2C946AF6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 167.61,
   "distance": 1,
   "backwardYaw": -102.63,
   "panorama": "this.panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -116.09,
   "distance": 1,
   "backwardYaw": -173.35,
   "panorama": "this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -19.19,
   "distance": 1,
   "backwardYaw": 17.69,
   "panorama": "this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 158.78,
   "y": 210.84,
   "x": 453.9
  }
 ],
 "thumbnailUrl": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeInEffect",
 "id": "effect_3C26CB56_2B06_FF60_41BA_802D0A7A24D4",
 "duration": 500,
 "easing": "linear"
},
{
 "fieldOfViewOverlayInsideColor": "#00CCFF",
 "id": "map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 787,
 "label": "denah-pura-desa&puseh - Copy",
 "image": {
  "levels": [
   {
    "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E.png",
    "class": "ImageResourceLevel",
    "width": 787,
    "height": 401
   },
   {
    "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_lq.png",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 358,
    "height": 183
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_2586B239_2BFD_7DEC_41B3_5D6D3B8C12F5",
  "this.overlay_24976DFA_2BFC_E66C_419A_A78A6D0EFA33",
  "this.overlay_25455BB1_2BFC_E2FD_41C1_F4ABFFDD895B",
  "this.overlay_24DE8649_2BFF_65AC_41C5_0395E036F7DC",
  "this.overlay_248C35EF_2BFF_A665_41B8_E5E9B50032D3",
  "this.overlay_25A522FC_2BFF_A264_41C0_6EF9E07C9C6A",
  "this.overlay_2506D324_2BFF_E39B_41BA_0535583C39AD",
  "this.overlay_252C61C9_2BFC_9EAD_41B6_0AE3CAE291B6",
  "this.overlay_24DBD231_2BFC_9DFC_41BE_98BB28469B51",
  "this.overlay_2481F667_2BFC_A264_419E_3B18B9BE78F9",
  "this.overlay_25182553_2BFD_67BD_41A3_D595004671EA",
  "this.overlay_24C3AF13_2BFD_63BC_41BC_53CBDE9BD1DE",
  "this.overlay_2485ADB1_2BFD_A6FD_41C5_1DEBB72064FA",
  "this.overlay_250A904A_2BFD_9DAC_41B1_D0F82F495F39",
  "this.overlay_24DB62DA_2BFD_E2AF_41C5_DC91FEE1846E",
  "this.overlay_2459F9DE_2BFD_AEA4_41B6_D96D65AC80A9",
  "this.overlay_24FD3B65_2BFC_A264_41C3_7F705893FD28"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.16,
 "thumbnailUrl": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_t.png",
 "fieldOfViewOverlayRadiusScale": 0.2,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 401
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.91,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F212389_2E9B_1773_4193_A5A49C090DDF"
},
{
 "class": "FadeInEffect",
 "id": "effect_0637A779_1B48_6643_41B1_A1A99329476B",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194935_102",
 "hfovMin": "135%",
 "id": "panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00",
 "overlays": [
  "this.overlay_1B887E5D_14B0_D152_41B0_A43D61947562",
  "this.overlay_1B1A1F7A_14B3_4F57_41A5_906333C7521F",
  "this.overlay_1A14BFE9_14B3_CF75_41A7_9770515E86E4",
  "this.overlay_1BF671EA_14B3_B376_41B0_C0373FC46D4F",
  "this.overlay_1BBF4089_14B3_51B2_419E_CA9E3E976108",
  "this.overlay_1A6C0FFF_14B0_CF4D_41A0_2491D235702D",
  "this.overlay_3F80B4B6_2B0A_8920_41BE_5844EB24B69E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 30.62,
   "distance": 1,
   "backwardYaw": 105.3,
   "panorama": "this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 154.04,
   "distance": 1,
   "backwardYaw": 39.6,
   "panorama": "this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 299.3,
   "y": 258.84,
   "x": 149.84
  }
 ],
 "thumbnailUrl": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_195456_580",
 "hfovMin": "135%",
 "id": "panorama_1E1A6C54_1471_7153_41A1_C179147AAF47",
 "overlays": [
  "this.overlay_1B92FA90_14B1_71D3_419B_131C8CA3B5B3",
  "this.overlay_3F8CCCC5_2B05_9960_41B5_F9BCA73F5D83"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -94.68,
   "distance": 1,
   "backwardYaw": -98.78,
   "panorama": "this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 11.16,
   "y": 155.71,
   "x": 745.04
  }
 ],
 "thumbnailUrl": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F90B2AE_2E9B_168E_41BC_2097AB14015A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F8782BE_2E9B_1691_41BF_9B0FF453C967"
},
{
 "class": "FadeInEffect",
 "id": "effect_07FA9A63_1BD9_AE47_41A1_D2270A8CEC3A",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194649_231",
 "hfovMin": "135%",
 "id": "panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734",
 "overlays": [
  "this.overlay_1B0BB513_1497_D0D6_41B1_70E90742567E",
  "this.overlay_1A1D9189_1497_53B2_41A8_AE94BA5BD986",
  "this.overlay_1A53D2D0_1490_D153_41AE_B053119E7A1A",
  "this.overlay_1A1C693A_1491_50D6_416E_81A4BB352F12",
  "this.overlay_1A23648F_1490_B1CD_4193_0E24BDDF14B8",
  "this.overlay_1A1B0B9E_1491_B7CE_418C_DB068CC8E66A",
  "this.overlay_0D030DB2_1471_D3D6_41AA_636B57B6CD39",
  "this.overlay_08D146FD_1591_7152_41B3_5982CDB45BA9",
  "this.overlay_0250109E_1B4B_9AC0_41AD_E30C7BA74AE3",
  "this.overlay_01B8A14F_1BD8_9A5F_4192_C2B7F263A742",
  "this.overlay_3F9DAB90_2B0A_9FE0_41A6_94901AB15A41"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 161.61,
   "distance": 1,
   "backwardYaw": -35.53,
   "panorama": "this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 123.45,
   "distance": 1,
   "backwardYaw": 30.99,
   "panorama": "this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.6,
   "distance": 1,
   "backwardYaw": 154.04,
   "panorama": "this.panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -25.35,
   "distance": 1,
   "backwardYaw": -74.62,
   "panorama": "this.panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 131.58,
   "y": 138.89,
   "x": 257.91
  }
 ],
 "thumbnailUrl": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_camera"
},
{
 "class": "FadeOutEffect",
 "id": "effect_07C828FD_1B73_1ACB_41B9_CCBE0104DFBD",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CEFEC48_2BFF_9961_41C1_8E7C8F724E8A",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.83,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E04E221_2E9B_11B2_41B4_020CA1DFE489"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_3DA1DD1C_2B1B_98E0_41BE_AECD8D96DBB3",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E183619_1471_50D2_41A3_78D4007FABCF_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_0675D7CD_1B73_16CB_41BA_C82049C4E7AF",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.54,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E9DB185_2E9B_1372_41C1_C46B1F9E56CE"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C2FE634_2B1E_8920_41C2_DD0352BE7CD9",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3ED311E3_2E9B_12B6_41C2_6D4AE9B26A5C"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CAF2127_2B0E_8B20_41C4_0205C28CD049",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.01,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EC4E1E3_2E9B_12B6_41BA_03DFF04DB381"
},
{
 "class": "FadeInEffect",
 "id": "effect_3DC7ACDE_2B1A_B960_418B_39091C3D6049",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0C7E7239_1B57_094B_41A2_DAA02457F295",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_00824EEA_1B53_F6C9_41A8_0DB6ABCC6682",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_195030_360",
 "hfovMin": "135%",
 "id": "panorama_1E1921D9_1471_F355_41B1_B999948786F3",
 "overlays": [
  "this.overlay_1BD0FAFA_14B0_B157_41A2_576469FB5581",
  "this.overlay_1A266633_14BF_50D5_41AA_94BE1F0F7924",
  "this.overlay_3F99DF5A_2B0A_B760_41B0_4A21829710F6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 125.98,
   "distance": 1,
   "backwardYaw": -85.22,
   "panorama": "this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": -66.73,
   "y": 342.76,
   "x": 286.9
  }
 ],
 "thumbnailUrl": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.34,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FCAF31B_2E9B_1796_41BE_D46221DC6C8D"
},
{
 "class": "FadeInEffect",
 "id": "effect_3308609A_2B1B_89E0_41BA_05E4CDCF3207",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194206_717",
 "hfovMin": "135%",
 "id": "panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3",
 "overlays": [
  "this.overlay_1B0CF5B0_14F0_D3D3_41A0_8A0F5500F636",
  "this.overlay_1BDCABC8_14F1_B7B3_41B3_9136D3937245",
  "this.overlay_1BE2E91F_14F1_D0CE_4197_D6BCCD2C9044",
  "this.overlay_1AE2CF38_14F1_50D2_41B0_C4E29B47EDD0",
  "this.overlay_1BD17DC4_14F0_B3B2_41B2_430FEA3D0C14",
  "this.overlay_1A4FAB1F_14FF_50CD_4197_726988676C90",
  "this.overlay_3FB358E2_2B0B_B920_41A4_02F3D5C2F34B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 41.39,
   "distance": 1,
   "backwardYaw": -93.5,
   "panorama": "this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 137.42,
   "distance": 1,
   "backwardYaw": 34.93,
   "panorama": "this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.35,
   "distance": 1,
   "backwardYaw": -116.09,
   "panorama": "this.panorama_1E15065B_1470_B156_41B2_1D767604BB54"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 50.03,
   "y": 159.7,
   "x": 531.94
  }
 ],
 "thumbnailUrl": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_216B1175_2E9B_1392_4184_3C8AD3D7364C"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.5,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F3CC369_2E9B_17B2_4141_440A52D7DED3"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C65DE1F_2B0B_791F_41A9_4DD6A12DE529",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_08173DE6_2B1A_FB20_41A7_8B28E09F200C",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194906_690",
 "hfovMin": "135%",
 "id": "panorama_1E1B4CD3_1471_5155_4192_98212238AC72",
 "overlays": [
  "this.overlay_1BC1911C_1491_B0D2_41A1_E743949047BF",
  "this.overlay_1A045077_1490_B15E_41B3_AE2EEAD682C2",
  "this.overlay_1A6066A3_14AF_51F5_4193_CB03ADE46A9F",
  "this.overlay_1A391B36_14AF_50DF_4190_6B7CF0CCE175",
  "this.overlay_1A4EA415_14B3_B0D2_417E_9D09BC39F608",
  "this.overlay_1A634B27_14B0_B0FE_41A3_72AE2D72D05B",
  "this.overlay_1B9558EC_14B0_F173_41B2_7E31437D2574",
  "this.overlay_1BE273D0_14B0_B752_41B4_69315377464A",
  "this.overlay_010FE50B_1BD8_9BC0_41AD_20035A3F447F",
  "this.overlay_3E6C9566_2B0A_8B20_41C2_A8CA27A4DABB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 30.99,
   "distance": 1,
   "backwardYaw": 123.45,
   "panorama": "this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.17,
   "distance": 1,
   "backwardYaw": 57.9,
   "panorama": "this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 105.3,
   "distance": 1,
   "backwardYaw": 30.62,
   "panorama": "this.panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 40.29,
   "y": 182.7,
   "x": 100.89
  }
 ],
 "thumbnailUrl": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0C943117_1B51_0B47_41B0_CD703E210940",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D864183_2B07_8BE0_41B2_FDC975E22730",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F322379_2E9B_1792_41BC_2BAD805D5463"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D34DB1E_2BFA_98E1_41C2_7765C9CECAA5",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D5B8342_2B05_8F60_41AF_EEFE26C8DF40",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194840_933",
 "hfovMin": "135%",
 "id": "panorama_1E1C21E0_1471_5373_41AB_08A1697D703B",
 "overlays": [
  "this.overlay_1BD908A7_1491_D1FD_4185_B37476CADC73",
  "this.overlay_1A0C419A_1491_B3D6_4181_EE3B11296CBF",
  "this.overlay_1A2FB819_1491_70D5_419E_C98A16F9AA3D",
  "this.overlay_1B61B2B7_1490_D1DD_4184_F5D041888533",
  "this.overlay_1A363CFB_1490_D156_4196_29D760E9E27C",
  "this.overlay_1BE143F7_1493_775E_41A0_9714652D239A",
  "this.overlay_3F90EB70_2B0A_9F20_41C5_1D7466F13FFE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 26.25,
   "distance": 1,
   "backwardYaw": 121.05,
   "panorama": "this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 91.13,
   "y": 104.76,
   "x": 102.89
  }
 ],
 "thumbnailUrl": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeOutEffect",
 "id": "effect_0E31E2CB_1B31_0EC8_41B5_D62C72D779D8",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_33AF991E_2B06_98E0_41B0_2E938C8E0D4B",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_0E95A8EB_2B1A_B920_41B4_18E671A85DA6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D380B28_2B0E_9F20_41B5_DA7E07FA66FE",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E8B21A4_2E9B_12B2_41B5_A9BDB781FE63"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.2,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EB181B4_2E9B_1292_4199_7877C79B85DA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21581137_2E9B_139E_4191_A9E3CEC19224"
},
{
 "class": "FadeInEffect",
 "id": "effect_076EAEB6_1BDF_E6C0_41B4_FCB17FBE6E9E",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_33E5BA8A_2B0A_B9E0_41C4_7D853F2898D6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C3B3EA7_2B05_B920_41A6_63481EE3E95F",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C015C2C_2B06_9920_4172_A4D6DE79149F",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_05F2DB0C_1B71_3F49_41A8_7F27E00E53F0",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C77190D_2B07_98E0_415F_B3571200166E",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C32FD26_2B0A_BB20_4184_044B4BF6D8B3",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3272BB6F_2B0A_9F20_41BB_0A07F2327116",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D9A5C3D_2B0B_9923_41C5_889353CD89FB",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_33367EC3_2B06_9960_41C1_319C21407847",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_018759E8_1B71_3AC9_41B1_39649CC0FF58",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.96,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EF811F2_2E9B_1296_41A0_7FB7C83DEA7A"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D161D8B_2B05_9BE0_41BF_E603A2B02CD3",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_07516D2E_1B77_1B49_4198_C58BBA8B9D74",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1B4CD3_1471_5155_4192_98212238AC72_camera"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0707253B_1B73_0B4F_41A4_42AEE4C730B6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_3FD130CA_2E9B_12F1_41C1_5417AB3D7E78"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_195006_216",
 "hfovMin": "135%",
 "id": "panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14",
 "overlays": [
  "this.overlay_1BD933B1_1493_F7D2_41A4_88DED857015D",
  "this.overlay_1A90A96B_1493_5375_41A7_339DAAAF52C5",
  "this.overlay_1B75584B_1490_B0B5_41AC_CC5A7766A11A",
  "this.overlay_1BAF292D_1490_B0F2_41B4_40E6D27040C1",
  "this.overlay_1A01544B_1491_B0B5_419A_0A07F10C29CC",
  "this.overlay_06A31862_1BF8_AA40_4198_EA0CEA769C05",
  "this.overlay_3F9A3FA1_2B0A_9723_41BB_9550D266E226"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 160.03,
   "distance": 1,
   "backwardYaw": 133.39,
   "panorama": "this.panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -74.62,
   "distance": 1,
   "backwardYaw": -25.35,
   "panorama": "this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": -54.37,
   "y": 138.89,
   "x": 337.95
  }
 ],
 "thumbnailUrl": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeOutEffect",
 "id": "effect_0197B771_1B4F_37DB_41B2_A4BC395E21E6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E290241_2E9B_11F3_41C2_BE3C542526F1"
},
{
 "class": "FadeInEffect",
 "id": "effect_0680CB4C_1B71_1FC9_41A4_A9F79140E7DA",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_328F09AF_2B1D_FB20_41B6_0E733401D6A0",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2170B166_2E9B_13BE_41B4_8CCD67C98D5E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_193837_372",
 "hfovMin": "135%",
 "id": "panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895",
 "overlays": [
  "this.overlay_1AF9F4C7_14F0_B1BE_4162_A2D3C332F665",
  "this.overlay_1AAE68A0_14F1_F1F3_41AE_175D2436C082",
  "this.overlay_1A8DBBFD_14F1_574D_4191_F710F33D41C9",
  "this.overlay_3EA72C20_2B0B_F921_41C5_318250796E61"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -18.84,
   "distance": 1,
   "backwardYaw": 161.02,
   "panorama": "this.panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 137.46,
   "distance": 1,
   "backwardYaw": -12.53,
   "panorama": "this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 214.33,
   "y": 332.88,
   "x": 689.91
  }
 ],
 "thumbnailUrl": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.81,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EBE71A4_2E9B_12B2_41C4_0334401DA511"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CAC44A2_2B1E_8920_41A1_7FAF8CD6275C",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CD0B52B_2BFA_8B27_41C5_1821DDBD6D5D",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.58,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EA4E1C4_2E9B_12F1_41A4_4F6159B7958E"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0C1D26D6_1B51_16D9_41B5_F3F0529FFEAC",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E580250_2E9B_1192_41AF_C4C2CF45FE78"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.01,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FD412FC_2E9B_1692_41C2_FCA7C090F74A"
},
{
 "class": "FadeOutEffect",
 "id": "effect_3913A0B8_1B51_0949_41B6_352AD61DF5FE",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_04C4E58E_1B4F_0B49_4199_E8C4DF9CE266",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_0E65C371_2B0D_8F20_41C2_661A1AE1D16B",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E4EC250_2E9B_1192_41BF_871A7D32ED1D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.31,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E7DB26F_2E9B_118E_41B8_2AD22363C41F"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FA522EC_2E9B_16B2_4190_3C26071ED1EA"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_073D7835_1B71_195B_4193_FA51113200D9.ogg",
  "mp3Url": "media/audio_073D7835_1B71_195B_4193_FA51113200D9.mp3"
 },
 "id": "audio_073D7835_1B71_195B_4193_FA51113200D9",
 "data": {
  "label": "Pura Dalem Mengwitani"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.88,
  "pitch": -1.53
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.38,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F0DF35A_2E9B_1791_41B9_4AD0713EF7FC"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CF7163B_2BFF_8920_41BA_91D64C3EFE0A",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_07682C90_1BFF_EAC1_419F_3E175EA651C6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.96,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21259127_2E9B_13BE_41B9_90EAB2D48057"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C1168CD_2BFE_9960_4183_8D0EBE5ABF6B",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_04E99507_1B73_0B47_41B6_ED71CB8BE43C",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0586C894_1B71_1959_41A2_2EFEC6E493DA",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3CE0F637_2B0D_8920_419B_EF42110D50F6",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_33F05A0F_2B1F_78E0_41C2_8B2BEBEA1BAB",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E15065B_1470_B156_41B2_1D767604BB54_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_camera"
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_3FCC60CA_2E9B_12F1_41A2_95E77CEE5CF4",
  "this.PanoramaPlayListItem_3FCD20CA_2E9B_12F1_41B0_379E0925081E",
  "this.PanoramaPlayListItem_3FCDA0D9_2E9B_1292_4180_BF9EABE66EF5",
  "this.PanoramaPlayListItem_3FCE00D9_2E9B_1292_41C0_BBA2227243A1",
  "this.PanoramaPlayListItem_3FCED0D9_2E9B_1292_41C5_5C46677EEE16",
  "this.PanoramaPlayListItem_3FCF40D9_2E9B_1292_41C0_41E45370E486",
  "this.PanoramaPlayListItem_3FCFD0D9_2E9B_1292_41C2_74975B2608FC",
  "this.PanoramaPlayListItem_3FC840D9_2E9B_1292_4188_B42893D2F9DC",
  "this.PanoramaPlayListItem_3FC8B0D9_2E9B_1292_41B3_435B8CE73E2A",
  "this.PanoramaPlayListItem_3FC930D9_2E9B_1292_41C6_DDCF221275DF",
  "this.PanoramaPlayListItem_3FC9A0D9_2E9B_1292_41C7_308F1DC3BC73",
  "this.PanoramaPlayListItem_3FC8C0D9_2E9B_1292_41B9_85F039EE3EB6",
  "this.PanoramaPlayListItem_3FC940D9_2E9B_1292_41B3_4652ED60AD9B",
  "this.PanoramaPlayListItem_3FC9C0D9_2E9B_1292_41C6_D6AF780DBF6A",
  "this.PanoramaPlayListItem_3FCA30D9_2E9B_1292_419F_555A857441B7",
  "this.PanoramaPlayListItem_3FCAB0D9_2E9B_1292_41B8_AF898D215607",
  "this.PanoramaPlayListItem_3FCB30D9_2E9B_1292_41B5_150AF78D7F19"
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194617_186",
 "hfovMin": "135%",
 "id": "panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D",
 "overlays": [
  "this.overlay_1A1E6D4D_14F1_D34D_41B1_21275E2DA0C7",
  "this.overlay_1B8DC80D_14F0_D0B2_41B3_CC1561B9234E",
  "this.overlay_1A93735F_1490_D74E_4192_2AF043F8711D",
  "this.overlay_1A63ADBA_1491_53D7_41A7_C3267F4C33EA",
  "this.overlay_062E8BC1_1490_D7B5_419A_2DF6A72A04B0",
  "this.overlay_3E6C80D7_2B0A_8960_41B0_8962CE5318D3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 133.39,
   "distance": 1,
   "backwardYaw": 160.03,
   "panorama": "this.panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -102.63,
   "distance": 1,
   "backwardYaw": 167.61,
   "panorama": "this.panorama_1E15065B_1470_B156_41B2_1D767604BB54"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 195.36,
   "y": 168.73,
   "x": 373.21
  }
 ],
 "thumbnailUrl": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeOutEffect",
 "id": "effect_0C3450E4_1B33_0AF8_41B3_B0C27601FA6A",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "id": "effect_3DB167D9_2B1D_B763_41B0_4044FD5C5636",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_195357_301",
 "hfovMin": "135%",
 "id": "panorama_1E183619_1471_50D2_41A3_78D4007FABCF",
 "overlays": [
  "this.overlay_1BE57E13_14BF_50D5_41A0_C42E9BE4EB91",
  "this.overlay_1A6CF5D4_14B0_D352_41A9_EBF1040B7E80",
  "this.overlay_1BA4B0B7_14B3_51DE_419A_7A7BC6E45FB5",
  "this.overlay_1BF9C27B_14B3_D156_415B_7DF5B63FF2C5",
  "this.overlay_01A850EC_1490_D172_41B4_209AE25EA4A5",
  "this.overlay_09BE2A94_1470_B1D2_41B1_25C733940D10",
  "this.overlay_3F975DE6_2B0A_9B20_41A5_72CF95C1FF22"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 65.04,
   "distance": 1,
   "backwardYaw": 170.99,
   "panorama": "this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 141.79,
   "distance": 1,
   "backwardYaw": 50.66,
   "panorama": "this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -18.8,
   "distance": 1,
   "backwardYaw": 108.81,
   "panorama": "this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": -71.4,
   "y": 311.78,
   "x": 606.08
  }
 ],
 "thumbnailUrl": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194137_760",
 "hfovMin": "135%",
 "id": "panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0",
 "overlays": [
  "this.overlay_1B1288F1_14F1_5155_4184_7B3B6D9649FB",
  "this.overlay_197DCA0A_14F0_D0B6_41A8_11227ACE18B9",
  "this.overlay_3F8D8B8D_2B0B_9FE0_41BA_AEDE4721490B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 161.02,
   "distance": 1,
   "backwardYaw": -18.84,
   "panorama": "this.panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 249.68,
   "y": 354.83,
   "x": 646.95
  }
 ],
 "thumbnailUrl": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeInEffect",
 "id": "effect_3C337125_2B1A_8B20_41B5_6F4A4B7BBA7F",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_193754_008",
 "hfovMin": "135%",
 "id": "panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF",
 "overlays": [
  "this.overlay_192065AD_1490_B3CD_41A7_321C40824211",
  "this.overlay_1AEEEB91_14EF_F7D5_41A1_E2C8A10CA526",
  "this.overlay_1AE94513_14F3_50D6_41B0_BCD6C007198F",
  "this.overlay_1BB3DE84_14B1_51B2_416A_2927C4108301",
  "this.overlay_02F1D0DE_1B58_BA41_41B7_60EBE45FD46E",
  "this.overlay_3C01864C_1B58_6640_41A1_23E043B178E7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.99,
   "distance": 1,
   "backwardYaw": 65.04,
   "panorama": "this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -93.5,
   "distance": 1,
   "backwardYaw": 41.39,
   "panorama": "this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 87.07,
   "distance": 1,
   "backwardYaw": 81.15,
   "panorama": "this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 156.56,
   "x": 634.12
  }
 ],
 "thumbnailUrl": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_t.jpg",
 "hfovMax": 130
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_3FD100CA_2E9B_12F1_41B9_9B7AFBAB64B2"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.16,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E61928F_2E9B_168F_41AA_82F8A1C5905C"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.55,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FE8333A_2E9B_1796_41BD_F4223065AF2A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.38,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3EECD202_2E9B_1176_41A4_50B0CF9E13F3"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C46CE5A_2B1B_7960_419E_DFC9D6A0EBDF",
 "duration": 500,
 "easing": "linear"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194758_074",
 "hfovMin": "135%",
 "id": "panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5",
 "overlays": [
  "this.overlay_1A4D9C26_1491_70FE_41A6_F96B44B36D07",
  "this.overlay_1A4C65F1_1491_D355_41A9_9A6B0A812AD5",
  "this.overlay_1A417910_1493_70D3_4176_F63CA3D55914",
  "this.overlay_1A7B228C_1493_51B2_41B0_9451C6207317",
  "this.overlay_1BABEBE3_1493_5775_4194_54896131AA55",
  "this.overlay_1A506A4A_1490_D0B6_41A9_C4AA4E95A7D2",
  "this.overlay_1BDD91D6_1491_B35E_41B3_95054EE9BF34",
  "this.overlay_1A71652C_1490_B0F3_41A3_F1645EEE6830",
  "this.overlay_1BC8A306_1490_F0BF_41B3_7B7E3525A8A6",
  "this.overlay_1AA6BB69_1497_5775_41A0_0FF16A2FF968",
  "this.overlay_01238FBC_1BD8_A6C1_41B7_4B862660B1A3",
  "this.overlay_3E6E4954_2B0A_BB60_41C0_B9FD68D83298"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -35.53,
   "distance": 1,
   "backwardYaw": 161.61,
   "panorama": "this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 121.05,
   "distance": 1,
   "backwardYaw": 26.25,
   "panorama": "this.panorama_1E1C21E0_1471_5373_41AB_08A1697D703B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 57.9,
   "distance": 1,
   "backwardYaw": -8.17,
   "panorama": "this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 157.84,
   "y": 103.72,
   "x": 170.95
  }
 ],
 "thumbnailUrl": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeInEffect",
 "id": "effect_3C95087C_2B1A_9921_419F_54F0FECFA3D3",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.65,
  "pitch": 1.49
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_194518_469",
 "hfovMin": "135%",
 "id": "panorama_1E27DB73_1470_D756_41B0_E632A0315C7E",
 "overlays": [
  "this.overlay_1A3E7F59_14F1_CF55_41B3_982640D52B8B",
  "this.overlay_1A610A4D_14F1_714D_41A7_B73FC6E252C3",
  "this.overlay_1B1632A1_14F0_F1F2_41A2_5AF4E01DEF63",
  "this.overlay_1A15A400_14F3_B0B2_41A1_BC06B0F95280",
  "this.overlay_1AF8C216_14F1_50DE_417D_8F9641DDAA1E",
  "this.overlay_3F87239A_2B0B_8FE0_41A3_EEC25CBEF380"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 17.69,
   "distance": 1,
   "backwardYaw": -19.19,
   "panorama": "this.panorama_1E15065B_1470_B156_41B2_1D767604BB54"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 108.81,
   "distance": 1,
   "backwardYaw": -18.8,
   "panorama": "this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 34.93,
   "distance": 1,
   "backwardYaw": 137.42,
   "panorama": "this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -85.22,
   "distance": 1,
   "backwardYaw": 125.98,
   "panorama": "this.panorama_1E1921D9_1471_F355_41B1_B999948786F3"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": -21.47,
   "y": 314.91,
   "x": 508.94
  }
 ],
 "thumbnailUrl": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.19,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FF9832B_2E9B_17B6_4190_185B36CFD95E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E3B0231_2E9B_1192_41C3_515BCDB742E0"
},
{
 "class": "FadeInEffect",
 "id": "effect_07E7670B_1B71_774F_41B0_C904B1039B1C",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.85,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21527147_2E9B_13FF_41C0_3446979C7332"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20230628_195420_848",
 "hfovMin": "135%",
 "id": "panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA",
 "overlays": [
  "this.overlay_041E508E_14B1_D1CE_4199_DA776263FB5A",
  "this.overlay_1BEF441B_14B3_50D6_41A5_2326F67E7E84",
  "this.overlay_1BA77AC7_14B3_D1BD_41AB_FDB8BD2768BA",
  "this.overlay_1B7874D5_14B3_5152_419B_75DCFB716AC1",
  "this.overlay_1BF1EAE5_14B1_7172_4190_39ACA39E6D1C",
  "this.overlay_038E6523_1490_B0F6_41AA_E7589CFAB16D",
  "this.overlay_3F93325C_2B05_8961_41B0_AF8D85297E18"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 81.15,
   "distance": 1,
   "backwardYaw": 87.07,
   "panorama": "this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -98.78,
   "distance": 1,
   "backwardYaw": -94.68,
   "panorama": "this.panorama_1E1A6C54_1471_7153_41A1_C179147AAF47"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 50.66,
   "distance": 1,
   "backwardYaw": 141.79,
   "panorama": "this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -12.53,
   "distance": 1,
   "backwardYaw": 137.46,
   "panorama": "this.panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E",
   "class": "PanoramaMapLocation",
   "angle": 186.5,
   "y": 156.56,
   "x": 690.95
  }
 ],
 "thumbnailUrl": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeInEffect",
 "id": "effect_3C0CF4D1_2B1A_8960_41A7_747DBD71BFC2",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_camera"
},
{
 "class": "FadeInEffect",
 "id": "effect_3D48906E_2BFB_8920_41B9_472EEC4C0388",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153.75,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E16E212_2E9B_1191_41C0_012F7D478C89"
},
{
 "class": "FadeInEffect",
 "id": "effect_3C20584A_2B05_9961_41BC_4B03B113E7A4",
 "duration": 500,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3E6C627F_2E9B_118E_41C3_5C9111C28DA7"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F1F635A_2E9B_1791_41C3_71519FC6F650"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_camera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 50,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_02647220_1B58_79C0_41B5_C206BA2449B9",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 44,
 "right": "10.78%",
 "minHeight": 1,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_02647220_1B58_79C0_41B5_C206BA2449B9_rollover.png",
 "maxHeight": 101,
 "propagateClick": false,
 "iconURL": "skin/IconButton_02647220_1B58_79C0_41B5_C206BA2449B9.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "13.1%",
 "height": 44,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "data": {
  "name": "IconButton Info"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_0266C220_1B58_79C0_41AB_F2ED596DDDDE",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 44,
 "right": "10.69%",
 "minHeight": 1,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_0266C220_1B58_79C0_41AB_F2ED596DDDDE_rollover.png",
 "maxHeight": 101,
 "propagateClick": false,
 "iconURL": "skin/IconButton_0266C220_1B58_79C0_41AB_F2ED596DDDDE.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "4.98%",
 "height": 44,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 1,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "maxWidth": 1270,
 "id": "HTMLText_0360DB98_1B48_AEC0_41B0_91A3EAAFCAAA",
 "left": "1.36%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "width": "52.717%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "maxHeight": 512,
 "borderColor": "#000000",
 "top": "2.16%",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "height": "12.769%",
 "paddingLeft": 10,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:26px;font-family:'Bali Simbar-B';\">purpus);ln/ed]ed]\u00c1dt/buwit/.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:20px;font-family:'Product Sans';\"><B>Pura Puseh lan Desa, Desa Adat Buwit</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText1580"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0CF5F0D7_1C3A_FAC5_41B0_DF6C7A3674C5",
 "backgroundOpacity": 0,
 "shadow": false,
 "children": [
  "this.IconButton_0266A220_1B58_79C0_4185_26184A0A2434",
  "this.IconButton_0266E220_1B58_79C0_41B2_D9953CEA5403",
  "this.IconButton_0266D220_1B58_79C0_41B2_B899B0A17D0C"
 ],
 "width": "22.464%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "right": "0%",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": "14.925%",
 "verticalAlign": "top",
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container5289"
 },
 "gap": 15,
 "minWidth": 1
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "25%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 200,
 "right": "0%",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "paddingRight": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "height": "25%",
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "maxWidth": 1000,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "maxHeight": 200,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_035DF984_1B77_AAC1_41AD_BB42A2F9921A",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_035CE984_1B77_AAC1_4198_1D4AC1402008",
  "this.Container_035D2984_1B77_AAC1_41AA_45AE33430321"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Foto"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_035DF984_1B77_AAC1_41AD_BB42A2F9921A, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01797629_1BF9_99C0_41A6_4356DAD5B741",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_017E4629_1BF9_99C0_4192_9070D0700C92",
  "this.Container_017E8629_1BF9_99C0_419F_7EAFA8B86C53"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "Menus"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.Image_2B2F6ADA_1AC8_AE40_41AA_EE60B17B3EBE",
  "this.IconButton_352DC6F3_1AC8_6640_41B2_CE1C7123EFBD",
  "this.IconButton_34525DD8_1ADB_AA41_41B2_7BC90D6077AA",
  "this.IconButton_353DB9F1_1ADB_AA40_4186_FD238277DF96",
  "this.IconButton_3525A305_1AD8_BFC0_41B2_29505793D483",
  "this.IconButton_34DCB6A3_1AD8_A6C0_41B2_C42C3345A5DA",
  "this.IconButton_340F046E_1AD8_9A40_419F_FDEEA5B72EED",
  "this.IconButton_3525E94D_1AD8_EA40_41B9_0AB022D87FBC",
  "this.IconButton_3540DA6C_1ADF_AE40_41A4_6951DF7B44DC",
  "this.IconButton_34D06E2A_1ADF_A9C0_41BA_B62FBC0D1647",
  "this.IconButton_35564296_1AD8_9EC0_41AA_BA2632E2B623",
  "this.IconButton_34A1A5B5_1AD8_FAC3_41B9_BEBCF1F44EFC",
  "this.IconButton_35578680_1AD8_66C0_41AD_25E6CDBF78D0",
  "this.IconButton_352A62AB_1AD9_BEC0_41B9_2DE38674AB15",
  "this.IconButton_34FB078A_1AD9_A6C1_41B3_67E5A330566C",
  "this.IconButton_351CC8B0_1AC8_6AC0_41A5_32401321C87E",
  "this.IconButton_3460A15A_1ADB_9A40_41AA_A0F05EAA0F24",
  "this.IconButton_0FEBC089_1B57_094B_41AF_E7DF0EDDF6CC",
  "this.Container_3BEBA36F_1B57_0FC7_41A0_00E7231D686E"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "overflow": "hidden",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "DEENHAHA"
 },
 "gap": 10,
 "minWidth": 1,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3BD6BB22_2B05_BF20_4155_4018BC044352",
  "this.Container_3BD6DB22_2B05_BF20_41C0_83FB5B308F21"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BALEKULKUL---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3B994CFB_2B05_F927_4170_392B5993BD5E",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3B990CFB_2B05_F927_41B3_D8E8DC8A6FCF",
  "this.Container_3B996CFB_2B05_F927_41BB_3E63308FF0EA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BALEAGUNG---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3B994CFB_2B05_F927_4170_392B5993BD5E, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A0BED01_2B05_98E0_41A6_059674B12563",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A082D01_2B05_98E0_41B7_617BAA205283",
  "this.Container_3A0BCD01_2B05_98E0_41C4_87AB8EE9E554"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BALEGEDE---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A0BED01_2B05_98E0_41A6_059674B12563, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3AB6EF05_2B06_B8E0_41C3_11C398719434",
  "this.Container_3AB73F05_2B06_B8E0_41B9_E86B6440ACEF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BALEGONG---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39957054_2B06_8961_41C2_B10917611B1F",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3994E054_2B06_8961_41B6_6B0989E7E400",
  "this.Container_39951054_2B06_8961_419F_CF8C0593EEFD"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BALEKEMBAR---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39957054_2B06_8961_41C2_B10917611B1F, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3AD6C928_2B0B_7B20_41AE_59CBAA90A901",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3AD51928_2B0B_7B20_41A4_5E226CE26E57",
  "this.Container_3AD6F928_2B0B_7B20_418F_F92651ECD842"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BALETIMBANG---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3AD6C928_2B0B_7B20_41AE_59CBAA90A901, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3BECB58A_2B0A_8BE0_41C3_FB6BE08328FF",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3BECF58A_2B0A_8BE0_41BC_74AA8FE9F855",
  "this.Container_3BEC958A_2B0A_8BE0_41A9_09D4BC9ECA05"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "BEJI---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3BECB58A_2B0A_8BE0_41C3_FB6BE08328FF, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3BEF492F_2B0A_9B20_418E_151B9E09A331",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3BEC892F_2B0A_9B20_4191_59B15C6D5B47",
  "this.Container_3BEF692F_2B0A_9B20_41B2_E32C4D920E0A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "DHARMA---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3BEF492F_2B0A_9B20_418E_151B9E09A331, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39F4DEA0_2B0D_7920_41B1_822F70D2D9EE",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_39F42EA0_2B0D_7920_4193_B3F767C248BF",
  "this.Container_39F4FEA0_2B0D_7920_41B1_D9A9A6816264"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "JR MANTRI---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39F4DEA0_2B0D_7920_41B1_822F70D2D9EE, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3BC5C4A3_2B0A_8920_41A0_30960350ECD2",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3BC584A3_2B0A_8920_41C1_3E7A1E5D2C6E",
  "this.Container_3BC5E4A3_2B0A_8920_41C1_AD7554C6A6D7"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "JR SAPUH---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3BC5C4A3_2B0A_8920_41A0_30960350ECD2, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3AE53767_2B0A_F720_41BB_4AAFA8705DC9",
  "this.Container_3AE50767_2B0A_F720_41B1_63472979F86F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "PUSEH"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_38315C2C_2B0A_9920_41C5_5C7EEE37B88C",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3830EC2B_2B0A_9920_41B0_F84B5CE57617",
  "this.Container_38308C2C_2B0A_9920_41BF_9FD0FA0BFF9F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "KORIAGUNG ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_38315C2C_2B0A_9920_41C5_5C7EEE37B88C, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3AC13024_2B0A_8920_41AF_F379FBA07AF0",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3AC17024_2B0A_8920_41A7_7DB0345183A5",
  "this.Container_3AC15024_2B0A_8920_41B3_DDC35F977464"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "?"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3AC13024_2B0A_8920_41AF_F379FBA07AF0, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3ADA2C34_2B0A_9920_41A7_375055D9D58E",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3ADBEC34_2B0A_9920_41BE_7A09E2DCD1B2",
  "this.Container_3ADA0C34_2B0A_9920_41BE_863CDA76AF92"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "LUHUR ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3ADA2C34_2B0A_9920_41A7_375055D9D58E, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A33AF86_2B0A_B7E1_41A3_A364B6A78697",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A336F86_2B0A_B7E1_41A3_D09F0CF73152",
  "this.Container_3A338F86_2B0A_B7E1_41B5_7E59F7885A9C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "MANIK GALIH---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A33AF86_2B0A_B7E1_41A3_A364B6A78697, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A39F450_2B0A_8960_41B1_3C0230264486",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A39B450_2B0A_8960_41A9_9EC15F953759",
  "this.Container_3A399450_2B0A_8960_41BE_84B416D27D1C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "PELINGGIH NAK LINGSIR ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A39F450_2B0A_8960_41B1_3C0230264486, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3ACF182E_2B0A_9920_41A7_1590F1111FBF",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3ACF482E_2B0A_9920_41A2_67EC953C00C0",
  "this.Container_3ACF682E_2B0A_9920_41C0_7578C95933B8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "PECALANG BINGIN ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3ACF182E_2B0A_9920_41A7_1590F1111FBF, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3ACE0D36_2B0A_BB20_41C0_2D44DDAAADA3",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3ACE5D35_2B0A_BB20_41C1_C4A45DDFBCBC",
  "this.Container_3ACE7D35_2B0A_BB20_41B6_7E7B803CC933"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "PEDANAN ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3ACE0D36_2B0A_BB20_41C0_2D44DDAAADA3, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A7D7612_2B0A_88E0_41C3_42321CFBB9C5",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A02B612_2B0A_88E0_41C2_660318AD7712",
  "this.Container_3A029612_2B0A_88E0_41B2_73A26D0C61C8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "NAGA BASUKI ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A7D7612_2B0A_88E0_41C3_42321CFBB9C5, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A330B8F_2B05_9FE0_41C5_643880718E64",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A33CB8F_2B05_9FE0_41B8_30620F27EC4E",
  "this.Container_3A33EB8F_2B05_9FE0_41AB_0286401B148F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "TAMAN ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A330B8F_2B05_9FE0_41C5_643880718E64, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3AE178E6_2B06_9920_41C4_DB2932F568C9",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3AE118E6_2B06_9920_41C0_DBB1E29AF15C",
  "this.Container_3AE158E6_2B06_9920_41B6_1659188E26C2"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "PENGUBENGAN ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3AE178E6_2B06_9920_41C4_DB2932F568C9, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A761CF2_2B06_B921_41C1_9CC53AE65EE9",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A79DCF2_2B06_B921_41B7_DC095CCB86DF",
  "this.Container_3A79FCF2_2B06_B921_41AE_13BE5A58C375"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "PEWAREGAN ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A761CF2_2B06_B921_41C1_9CC53AE65EE9, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39352680_2B06_89E0_41AF_CE797F2B7EE8",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3934F680_2B06_89E0_41C1_1998F995D1A1",
  "this.Container_3934D680_2B06_89E0_41A8_DFCE1401907C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "MELANTING ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39352680_2B06_89E0_41AF_CE797F2B7EE8, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3AF6F88E_2B06_99E0_41AF_21D483D6030D",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3AF6288E_2B06_99E0_41C0_B28A26D11528",
  "this.Container_3AF6C88E_2B06_99E0_419E_A9CB034027AB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "RARE ANGN---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3AF6F88E_2B06_99E0_41AF_21D483D6030D, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_393690E6_2B06_8920_41B1_0282BB2FAA41",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3936E0E6_2B06_8920_418E_3C3CF8E70340",
  "this.Container_3936C0E6_2B06_8920_41AA_CB6FCB4B8030"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "SUBAK ---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_393690E6_2B06_8920_41B1_0282BB2FAA41, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A27A582_2B07_8BE0_41B8_216DB1502149",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_3A27E582_2B07_8BE0_41C4_EE12FAD5488B",
  "this.Container_3A27C582_2B07_8BE0_416A_2A5BA70DBFA0"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "TAKSU---------[]"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_3A27A582_2B07_8BE0_41B8_216DB1502149, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0066AE9A_1BC8_E6C0_41A1_C0491F4EF140",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_0061BE9A_1BC8_E6C0_41B4_30CE2A306ADC",
  "this.Container_00617E9A_1BC8_E6C0_41B7_A4B35A574CDB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D Patun dekat Kori Agung"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_0066AE9A_1BC8_E6C0_41A1_C0491F4EF140, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0A8EE213_19C8_99C0_41AE_E02524E71AD1",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_0A8FE213_19C8_99C0_41B4_FB2191492F0A",
  "this.Container_0A8F3213_19C8_99C0_418F_54A2210726CB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D Pengubengan"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_0A8EE213_19C8_99C0_41AE_E02524E71AD1, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_00DC0BF2_1B58_AE41_41B3_84E307674714",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_00DD0BF2_1B58_AE41_41B1_85FA9B079008",
  "this.Container_00DC7BF2_1B58_AE41_418F_91E8B3EA9CCA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D Jun Sari"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C2DDD32_19C8_EBC0_4188_ACB701906BFE",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_0C6D9D32_19C8_EBC0_41A4_4D884565E7D2",
  "this.Container_0C2DBD32_19C8_EBC0_41B3_558529BD6B20"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D Pelinggih Nak Lingsir"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_0C2DDD32_19C8_EBC0_4188_ACB701906BFE, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_032EAB9C_1B5F_AEC1_41A7_8EDE9E1FC9D6",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_032DBB9C_1B5F_AEC1_41AE_E8DFBF8F79E3",
  "this.Container_032EFB9C_1B5F_AEC1_41B7_2139CCEAF85F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D Taman"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_032EAB9C_1B5F_AEC1_41A7_8EDE9E1FC9D6, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_032A3701_1B5F_E7C3_41AC_140519F0550B",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_03290701_1B5F_E7C3_41B5_136C7ABC57E0",
  "this.Container_0329C701_1B5F_E7C3_416C_C4F11ED45FD7"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "3D Naga Basuki"
 },
 "contentOpaque": true,
 "gap": 10,
 "minWidth": 1,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_032A3701_1B5F_E7C3_41AC_140519F0550B, false, 0, null, null, false)"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E, this.camera_3E7DB26F_2E9B_118E_41B8_2AD22363C41F); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.19,
   "hfov": 17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E871D0_146F_B352_41B3_B2465F4751F5",
   "pitch": -19.63,
   "yaw": -19.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17,
   "distance": 100
  }
 ],
 "id": "overlay_1B6BF246_14F1_70BE_41A8_FD2F43CBDE7E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AE178E6_2B06_9920_41C4_DB2932F568C9, true, 0, this.effect_3C77190D_2B07_98E0_415F_B3571200166E, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.38,
   "hfov": 5.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0740F0BD_1491_71D2_41A9_CFFB98A9742F",
   "pitch": -2.4,
   "yaw": -151.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.4,
   "distance": 100
  }
 ],
 "id": "overlay_1A3EA016_14F0_B0DE_418C_FF62431CE2A2",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90, true, 0, this.effect_3C015C2C_2B06_9920_4172_A4D6DE79149F, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.04,
   "hfov": 6.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0740B0BD_1491_71D2_41A5_0C6E55E39252",
   "pitch": -2.66,
   "yaw": -53.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.17,
   "distance": 100
  }
 ],
 "id": "overlay_1A52979B_14F1_5FD6_41AB_9DE8DEA2B4B1",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D, this.camera_3E580250_2E9B_1192_41AF_C4C2CF45FE78); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.61,
   "hfov": 17.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.9
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E7C1D0_146F_B352_419D_514F391EFE52",
   "pitch": -14.9,
   "yaw": 167.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.23,
   "distance": 100
  }
 ],
 "id": "overlay_1A36ABD1_14F1_5755_41A7_6F9D6459BD2B",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3, this.camera_3E4EC250_2E9B_1192_41BF_871A7D32ED1D); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.09,
   "hfov": 11.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.35
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0B4D3783_1470_DFB6_4187_B65A54CCA52C",
   "pitch": -13.35,
   "yaw": -116.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.6,
   "distance": 100
  }
 ],
 "id": "overlay_0CCF1807_1471_70BE_41A4_EBA8CB5F1974",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -140.73,
 "pitch": 51.55,
 "bleaching": 0.7,
 "id": "overlay_3F83E403_2B0B_88E7_41B0_5F7C2C946AF6"
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 129.27,
  "x": 621.62,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 129.65,
  "x": 621.81,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2586B239_2BFD_7DEC_41B3_5D6D3B8C12F5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 129.27,
  "x": 678.45,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 129.65,
  "x": 678.74,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24976DFA_2BFC_E66C_419A_A78A6D0EFA33",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 128.41,
  "x": 732.54,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 128.6,
  "x": 732.73,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_25455BB1_2BFC_E2FD_41C1_F4ABFFDD895B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 305.58,
  "x": 677.41,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 305.77,
  "x": 677.69,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24DE8649_2BFF_65AC_41C5_0395E036F7DC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 327.54,
  "x": 634.45,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 327.82,
  "x": 634.73,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_248C35EF_2BFF_A665_41B8_E5E9B50032D3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 284.48,
  "x": 593.58,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 284.67,
  "x": 593.77,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_25A522FC_2BFF_A264_41C0_6EF9E07C9C6A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 287.62,
  "x": 496.44,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_6.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_6_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 287.81,
  "x": 496.72,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2506D324_2BFF_E39B_41BA_0535583C39AD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 132.4,
  "x": 519.44,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_7.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_7_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 132.69,
  "x": 519.72,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_252C61C9_2BFC_9EAD_41B6_0AE3CAE291B6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 183.54,
  "x": 441.4,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_8.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_8_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 183.73,
  "x": 441.69,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24DBD231_2BFC_9DFC_41BE_98BB28469B51",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 315.47,
  "x": 274.4,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_9.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_9_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 315.66,
  "x": 274.69,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2481F667_2BFC_A264_419E_3B18B9BE78F9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 141.43,
  "x": 360.71,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_10.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_10_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 141.72,
  "x": 360.8,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_25182553_2BFD_67BD_41A3_D595004671EA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 111.59,
  "x": 325.45,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_11.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_11_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 111.78,
  "x": 325.73,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24C3AF13_2BFD_63BC_41BC_53CBDE9BD1DE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 111.59,
  "x": 245.41,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_12.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_12_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 111.78,
  "x": 245.7,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2485ADB1_2BFD_A6FD_41C5_1DEBB72064FA",
 "data": {
  "label": "Imager"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 76.42,
  "x": 158.45,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_13.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_13_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 76.7,
  "x": 158.73,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_250A904A_2BFD_9DAC_41B1_D0F82F495F39",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 77.46,
  "x": 90.39,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_14.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_14_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 77.75,
  "x": 90.68,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24DB62DA_2BFD_E2AF_41C5_DC91FEE1846E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 155.4,
  "x": 88.39,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_15.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_15_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 155.69,
  "x": 88.59,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2459F9DE_2BFD_AEA4_41B6_D96D65AC80A9",
 "data": {
  "label": "Imagez"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 231.54,
  "x": 137.34,
  "width": 25,
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_16.png",
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 54
    }
   ],
   "class": "ImageResource"
  },
  "height": 54.6
 },
 "map": {
  "width": 25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_25B990E1_2BFD_BE9C_41B9_D9E801F9816E_HS_16_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 36
    }
   ],
   "class": "ImageResource"
  },
  "y": 231.73,
  "x": 137.63,
  "offsetY": 0,
  "height": 54.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24FD3B65_2BFC_A264_41C3_7F705893FD28",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734, this.camera_3E8B21A4_2E9B_12B2_41B5_A9BDB781FE63); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.04,
   "hfov": 15.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074890CD_1491_71B2_4174_7332AA5A2DBB",
   "pitch": -10.56,
   "yaw": 154.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.31,
   "distance": 50
  }
 ],
 "id": "overlay_1B887E5D_14B0_D152_41B0_A43D61947562",
 "data": {
  "label": "Arrow 05c Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72, this.camera_3E907195_2E9B_1293_41C5_B5B961C45A58); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.62,
   "hfov": 21.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3167E286_1590_D1BE_41AA_D6A3059FC06A",
   "pitch": -19.85,
   "yaw": 30.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.6,
   "distance": 100
  }
 ],
 "id": "overlay_1B1A1F7A_14B3_4F57_41A5_906333C7521F",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_39957054_2B06_8961_41C2_B10917611B1F, true, 0, this.effect_3C20584A_2B05_9961_41BC_4B03B113E7A4, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.5,
   "hfov": 11.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074800CD_1491_71B2_41B0_26280984D8A7",
   "pitch": 2.3,
   "yaw": 106.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.67,
   "distance": 100
  }
 ],
 "id": "overlay_1A14BFE9_14B3_CF75_41A7_9770515E86E4",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A761CF2_2B06_B921_41C1_9CC53AE65EE9, true, 0, this.effect_3C3B3EA7_2B05_B920_41A6_63481EE3E95F, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.27,
   "hfov": 11.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.39
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0749C0CD_1491_71B2_4199_381BFB339564",
   "pitch": 1.39,
   "yaw": -41.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.07,
   "distance": 100
  }
 ],
 "id": "overlay_1BF671EA_14B3_B376_41B0_C0373FC46D4F",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A7D7612_2B0A_88E0_41C3_42321CFBB9C5, true, 0, this.effect_3D864183_2B07_8BE0_41B2_FDC975E22730, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.64,
   "hfov": 6.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.45
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074960CD_1491_71B2_41AE_DDF1A7906E79",
   "pitch": -4.45,
   "yaw": -162.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.87,
   "distance": 100
  }
 ],
 "id": "overlay_1BBF4089_14B3_51B2_419E_CA9E3E976108",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A330B8F_2B05_9FE0_41C5_643880718E64, true, 0, this.effect_3D161D8B_2B05_9BE0_41BF_E603A2B02CD3, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.97,
   "hfov": 5.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074920CD_1491_71B2_41A3_A6CE6EF54491",
   "pitch": -2.84,
   "yaw": -177.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.57,
   "distance": 100
  }
 ],
 "id": "overlay_1A6C0FFF_14B0_CF4D_41A0_2491D235702D",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 61.36,
 "pitch": 41.32,
 "bleaching": 0.7,
 "id": "overlay_3F80B4B6_2B0A_8920_41BE_5844EB24B69E"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA, this.camera_214BA156_2E9B_139E_41B6_F3FE307AE40D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.68,
   "hfov": 15.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02DFA081_1491_71B5_41B4_8E8BE5EE3C49",
   "pitch": -15.57,
   "yaw": -94.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.18,
   "distance": 100
  }
 ],
 "id": "overlay_1B92FA90_14B1_71D3_419B_131C8CA3B5B3",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 6.55,
 "pitch": 55.64,
 "bleaching": 0.7,
 "id": "overlay_3F8CCCC5_2B05_9960_41B5_F9BCA73F5D83"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14, this.camera_3EECD202_2E9B_1176_41A4_50B0CF9E13F3); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.35,
   "hfov": 14.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_31581286_1590_D1BE_41A9_1DF7920A3652",
   "pitch": -23.16,
   "yaw": -25.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.8,
   "distance": 100
  }
 ],
 "id": "overlay_1B0BB513_1497_D0D6_41B1_70E90742567E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_38315C2C_2B0A_9920_41C5_5C7EEE37B88C, true, 0, this.effect_3C46CE5A_2B1B_7960_419E_DFC9D6A0EBDF, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.53,
   "hfov": 6.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074030BD_1491_71D2_41A5_BB60D3B9D223",
   "pitch": 7.75,
   "yaw": -25.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.83,
   "distance": 100
  }
 ],
 "id": "overlay_1A1D9189_1497_53B2_41A8_AE94BA5BD986",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_39957054_2B06_8961_41C2_B10917611B1F, true, 0, this.effect_3C2FE634_2B1E_8920_41C2_DD0352BE7CD9, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.15,
   "hfov": 6.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0741C0BD_1491_71D2_4192_1E2D60E5745C",
   "pitch": 3.8,
   "yaw": 81.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.88,
   "distance": 100
  }
 ],
 "id": "overlay_1A53D2D0_1490_D153_41AE_B053119E7A1A",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_393690E6_2B06_8920_41B1_0282BB2FAA41, true, 0, this.effect_328F09AF_2B1D_FB20_41B6_0E733401D6A0, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.64,
   "hfov": 5.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074120BD_1491_71D2_41AF_71732B129022",
   "pitch": -4.28,
   "yaw": -138.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.48,
   "distance": 100
  }
 ],
 "id": "overlay_1A1C693A_1491_50D6_416E_81A4BB352F12",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BEF492F_2B0A_9B20_418E_151B9E09A331, true, 0, this.effect_3CAC44A2_2B1E_8920_41A1_7FAF8CD6275C, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.49,
   "hfov": 5.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.77
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0746C0BD_1491_71D2_4198_D62CA6F710DF",
   "pitch": -2.77,
   "yaw": -159.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.53,
   "distance": 100
  }
 ],
 "id": "overlay_1A23648F_1490_B1CD_4193_0E24BDDF14B8",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5, this.camera_3ED311E3_2E9B_12B6_41C2_6D4AE9B26A5C); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.61,
   "hfov": 9.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_31595286_1590_D1BE_4175_96A95C832F36",
   "pitch": -13.34,
   "yaw": 161.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.9,
   "distance": 100
  }
 ],
 "id": "overlay_1A1B0B9E_1491_B7CE_418C_DB068CC8E66A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00, this.camera_3EF811F2_2E9B_1296_41A0_7FB7C83DEA7A); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.6,
   "hfov": 11.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3159A286_1590_D1BE_417C_97903D098D7A",
   "pitch": -10.09,
   "yaw": 39.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.31,
   "distance": 50
  }
 ],
 "id": "overlay_0D030DB2_1471_D3D6_41AA_636B57B6CD39",
 "data": {
  "label": "Arrow 05b Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72, this.camera_3EC4E1E3_2E9B_12B6_41BA_03DFF04DB381); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.45,
   "hfov": 14.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_315A1286_1590_D1BE_41A5_F584409DE4C6",
   "pitch": -14.6,
   "yaw": 123.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.97,
   "distance": 100
  }
 ],
 "id": "overlay_08D146FD_1591_7152_41B3_5982CDB45BA9",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79, true, 0, this.effect_33F05A0F_2B1F_78E0_41C2_8B2BEBEA1BAB, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.41,
   "hfov": 5.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_01AC05D9_1B49_FA43_41B2_3CAFB812CFEE",
   "pitch": -1.88,
   "yaw": -178.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.51,
   "distance": 100
  }
 ],
 "id": "overlay_0250109E_1B4B_9AC0_41AD_E30C7BA74AE3",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714, true, 0, this.effect_07FA9A63_1BD9_AE47_41A1_D2270A8CEC3A, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.91,
   "hfov": 10,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.08
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 109.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 181,
      "height": 184
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.08,
   "hfov": 10
  }
 ],
 "id": "overlay_01B8A14F_1BD8_9A5F_4192_C2B7F263A742",
 "data": {
  "label": "Image"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -111.68,
 "pitch": 50.73,
 "bleaching": 0.7,
 "id": "overlay_3F9DAB90_2B0A_9FE0_41A6_94901AB15A41"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AF6F88E_2B06_99E0_41AF_21D483D6030D, true, 0, this.effect_3CB6161F_2BFA_88E0_41C4_2076DFD19560, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.86,
   "hfov": 4.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.81
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074F60CD_1491_71B2_4193_D04D9CA781D7",
   "pitch": 1.81,
   "yaw": 6.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.42,
   "distance": 100
  }
 ],
 "id": "overlay_1BD0FAFA_14B0_B157_41A2_576469FB5581",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E, this.camera_3F57D398_2E9B_1692_41A9_16B7F2780C54); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.98,
   "hfov": 9.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074F30CD_1491_71B2_41AF_964CF2DC163D",
   "pitch": -11.73,
   "yaw": 125.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.95,
   "distance": 100
  }
 ],
 "id": "overlay_1A266633_14BF_50D5_41AA_94BE1F0F7924",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 67.5,
 "pitch": 56.05,
 "bleaching": 0.7,
 "id": "overlay_3F99DF5A_2B0A_B760_41B0_4A21829710F6"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF, this.camera_3F3CC369_2E9B_17B2_4141_440A52D7DED3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.39,
   "hfov": 14.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E8C1D0_146F_B352_419B_E7F9CC7C69E9",
   "pitch": -13.74,
   "yaw": 41.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.31,
   "distance": 100
  }
 ],
 "id": "overlay_1B0CF5B0_14F0_D3D3_41A0_8A0F5500F636",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3B994CFB_2B05_F927_4170_392B5993BD5E, true, 0, this.effect_3C26CB56_2B06_FF60_41BA_802D0A7A24D4, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.14,
   "hfov": 9.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077C50BD_1491_71D2_41AB_34C041688329",
   "pitch": 3.16,
   "yaw": -54.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.95,
   "distance": 100
  }
 ],
 "id": "overlay_1BDCABC8_14F1_B7B3_41B3_9136D3937245",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AE178E6_2B06_9920_41C4_DB2932F568C9, true, 0, this.effect_0E65C371_2B0D_8F20_41C2_661A1AE1D16B, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.6,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077DE0BD_1491_71D2_4181_DA55AAFD559D",
   "pitch": -2.45,
   "yaw": -129.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1BE2E91F_14F1_D0CE_4197_D6BCCD2C9044",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90, true, 0, this.effect_3C7EDF25_2B05_7720_41B0_1B349C2A7DE3, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.79,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077DA0BD_1491_71D2_41AB_DF7E2C25D308",
   "pitch": -0.49,
   "yaw": 94.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1AE2CF38_14F1_50D2_41B0_C4E29B47EDD0",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E, this.camera_3F322379_2E9B_1792_41BC_2BAD805D5463); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.42,
   "hfov": 12.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077D60BD_1491_71D2_41A0_60F8E8B97DCF",
   "pitch": -12.69,
   "yaw": 137.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.77,
   "distance": 100
  }
 ],
 "id": "overlay_1BD17DC4_14F0_B3B2_41B2_430FEA3D0C14",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E15065B_1470_B156_41B2_1D767604BB54, this.camera_3F212389_2E9B_1773_4193_A5A49C090DDF); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.35,
   "hfov": 13.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077D00BD_1491_71D2_41A7_4D4EF639B420",
   "pitch": -14.47,
   "yaw": -173.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.35,
   "distance": 100
  }
 ],
 "id": "overlay_1A4FAB1F_14FF_50CD_4197_726988676C90",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -25.36,
 "pitch": 51.14,
 "bleaching": 0.7,
 "id": "overlay_3FB358E2_2B0B_B920_41A4_02F3D5C2F34B"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5, this.camera_3F1F635A_2E9B_1791_41C3_71519FC6F650); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.17,
   "hfov": 13.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.04
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074AF0CD_1491_71B2_41A1_0E9EC4633E52",
   "pitch": -16.04,
   "yaw": -8.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.25,
   "distance": 100
  }
 ],
 "id": "overlay_1BC1911C_1491_B0D2_41A1_E743949047BF",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734, this.camera_3FE8333A_2E9B_1796_41BD_F4223065AF2A); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.99,
   "hfov": 13.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.17
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_31661286_1590_D1BE_41A0_AA4E2362D49C",
   "pitch": -14.17,
   "yaw": 30.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.67,
   "distance": 100
  }
 ],
 "id": "overlay_1A045077_1490_B15E_41B3_AE2EEAD682C2",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_39957054_2B06_8961_41C2_B10917611B1F, true, 0, this.effect_3C2C1BD0_2B0D_BF60_41A9_4CF3AC05BCA0, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.24,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.83
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074A50CD_1491_71B2_419F_C114869EB245",
   "pitch": 0.83,
   "yaw": 74.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1A6066A3_14AF_51F5_4193_CB03ADE46A9F",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A761CF2_2B06_B921_41C1_9CC53AE65EE9, true, 0, this.effect_3272BB6F_2B0A_9F20_41BB_0A07F2327116, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.05,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074A30CD_1491_71B2_41A6_6BF1626201A6",
   "pitch": 1.49,
   "yaw": 153.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1A391B36_14AF_50DF_4190_6B7CF0CCE175",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00, this.camera_3F0DF35A_2E9B_1791_41B9_4AD0713EF7FC); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.3,
   "hfov": 13.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.67
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3166D286_1590_D1BE_41B2_20E522AA099D",
   "pitch": -14.67,
   "yaw": 105.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.1,
   "distance": 100
  }
 ],
 "id": "overlay_1A4EA415_14B3_B0D2_417E_9D09BC39F608",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A33AF86_2B0A_B7E1_41A3_A364B6A78697, true, 0, this.effect_33E5BA8A_2B0A_B9E0_41C4_7D853F2898D6, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.25,
   "hfov": 6.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074B40CD_1491_71B2_417A_6764B004E09A",
   "pitch": -3.69,
   "yaw": -146.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.88,
   "distance": 100
  }
 ],
 "id": "overlay_1A634B27_14B0_B0FE_41A3_72AE2D72D05B",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_39F4DEA0_2B0D_7920_41B1_822F70D2D9EE, true, 0, this.effect_3D9A5C3D_2B0B_9923_41C5_889353CD89FB, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.28,
   "hfov": 6.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074B30CD_1491_71B2_41B2_DE1AA004E53D",
   "pitch": -4.62,
   "yaw": -117.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.87,
   "distance": 100
  }
 ],
 "id": "overlay_1B9558EC_14B0_F173_41B2_7E31437D2574",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3ADA2C34_2B0A_9920_41A7_375055D9D58E, true, 0, this.effect_3C32FD26_2B0A_BB20_4184_044B4BF6D8B3, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.69,
   "hfov": 8.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0748C0CD_1491_71B2_4199_2AC8E50F3554",
   "pitch": -4.82,
   "yaw": -71.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.99,
   "distance": 100
  }
 ],
 "id": "overlay_1BE273D0_14B0_B752_41B4_69315377464A",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714, true, 0, this.effect_041BE06A_1BD9_BA40_41BA_94F2F82ECAC4, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.04,
   "hfov": 8.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 160,
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.52,
   "hfov": 8.84
  }
 ],
 "id": "overlay_010FE50B_1BD8_9BC0_41AD_20035A3F447F",
 "data": {
  "label": "Image"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -27.82,
 "pitch": 41.73,
 "bleaching": 0.7,
 "id": "overlay_3E6C9566_2B0A_8B20_41C2_A8CA27A4DABB"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5, this.camera_3E6C627F_2E9B_118E_41C3_5C9111C28DA7); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.25,
   "hfov": 18.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.68
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_31646286_1590_D1BE_4136_7C7262949B44",
   "pitch": -23.68,
   "yaw": 26.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.17,
   "distance": 100
  }
 ],
 "id": "overlay_1BD908A7_1491_D1FD_4185_B37476CADC73",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79, true, 0, this.effect_3D5B8342_2B05_8F60_41AF_EEFE26C8DF40, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.92,
   "hfov": 7.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074AA0CD_1491_71B2_41B3_9D6B3A5CC1ED",
   "pitch": -4.4,
   "yaw": -10.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.02,
   "distance": 100
  }
 ],
 "id": "overlay_1A0C419A_1491_B3D6_4181_EE3B11296CBF",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A27A582_2B07_8BE0_41B8_216DB1502149, true, 0, this.effect_33367EC3_2B06_9960_41C1_319C21407847, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.49,
   "hfov": 6.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0745E0CD_1491_71B2_41B3_F07A045FE8C2",
   "pitch": -6.63,
   "yaw": -37.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.85,
   "distance": 100
  }
 ],
 "id": "overlay_1A2FB819_1491_70D5_419E_C98A16F9AA3D",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AD6C928_2B0B_7B20_41AE_59CBAA90A901, true, 0, this.effect_33AF991E_2B06_98E0_41B0_2E938C8E0D4B, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.67,
   "hfov": 9.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0745D0CD_1491_71B2_417D_54BB57997883",
   "pitch": -8.29,
   "yaw": -121.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_1B61B2B7_1490_D1DD_4184_F5D041888533",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BC5C4A3_2B0A_8920_41A0_30960350ECD2, true, 0, this.effect_3CF430EB_2B0F_8920_41C2_C9F9F55C51C6, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.53,
   "hfov": 5.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074560CD_1491_71B2_41B4_C7B30A109D90",
   "pitch": -4.75,
   "yaw": -153.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.54,
   "distance": 100
  }
 ],
 "id": "overlay_1A363CFB_1490_D156_4196_29D760E9E27C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A39F450_2B0A_8960_41B1_3C0230264486, true, 0, this.effect_3CAF2127_2B0E_8B20_41C4_0205C28CD049, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.72,
   "hfov": 6.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074520CD_1491_71B2_41A7_8D4A3FBB98BC",
   "pitch": -6.89,
   "yaw": -168.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.27,
   "distance": 100
  }
 ],
 "id": "overlay_1BE143F7_1493_775E_41A0_9714652D239A",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -70.36,
 "pitch": 52.36,
 "bleaching": 0.7,
 "id": "overlay_3F90EB70_2B0A_9F20_41C5_1D7466F13FFE"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734, this.camera_3E290241_2E9B_11F3_41C2_BE3C542526F1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.62,
   "hfov": 21.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074EF0CD_1491_71B2_41B1_3900FEDD969B",
   "pitch": -28.89,
   "yaw": -74.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.12,
   "distance": 50
  }
 ],
 "id": "overlay_1BD933B1_1493_F7D2_41A4_88DED857015D",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3ACE0D36_2B0A_BB20_41C0_2D44DDAAADA3, true, 0, this.effect_3D34DB1E_2BFA_98E1_41C2_7765C9CECAA5, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.58,
   "hfov": 6.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074EB0CD_1491_71B2_418C_047736D4E280",
   "pitch": -3.62,
   "yaw": 83.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.88,
   "distance": 100
  }
 ],
 "id": "overlay_1A90A96B_1493_5375_41A7_339DAAAF52C5",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D, this.camera_3E3B0231_2E9B_1192_41C3_515BCDB742E0); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.03,
   "hfov": 23.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0B44C783_1470_DFB6_41AB_D67CF3E64F55",
   "pitch": -22.82,
   "yaw": 160.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.8,
   "distance": 50
  }
 ],
 "id": "overlay_1B75584B_1490_B0B5_41AC_CC5A7766A11A",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_38315C2C_2B0A_9920_41C5_5C7EEE37B88C, true, 0, this.effect_3D48906E_2BFB_8920_41B9_472EEC4C0388, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.96,
   "hfov": 8.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074E00CD_1491_71B2_41B2_D4BCDE8F2297",
   "pitch": 11.86,
   "yaw": -55.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.62,
   "distance": 100
  }
 ],
 "id": "overlay_1BAF292D_1490_B0F2_41B4_40E6D27040C1",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A0BED01_2B05_98E0_41A6_059674B12563, true, 0, this.effect_3CD0B52B_2BFA_8B27_41C5_1821DDBD6D5D, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.96,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.01
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074FC0CD_1491_71B2_41B1_C9F8CCD6C76F",
   "pitch": 0.01,
   "yaw": -128.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1A01544B_1491_B0B5_419A_0A07F10C29CC",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_0066AE9A_1BC8_E6C0_41A1_C0491F4EF140, true, 0, this.effect_07682C90_1BFF_EAC1_419F_3E175EA651C6, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.95,
   "hfov": 13.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.19
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -40.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 239,
      "height": 256
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.19,
   "hfov": 13.02
  }
 ],
 "id": "overlay_06A31862_1BF8_AA40_4198_EA0CEA769C05",
 "data": {
  "label": "Image"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 78.55,
 "pitch": 47.45,
 "bleaching": 0.7,
 "id": "overlay_3F9A3FA1_2B0A_9723_41BB_9550D266E226"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA, this.camera_3F8782BE_2E9B_1691_41BF_9B0FF453C967); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.46,
   "hfov": 18.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E9D1D0_146F_B352_41AF_60C7C0B3C3CC",
   "pitch": -15.59,
   "yaw": 137.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.96,
   "distance": 100
  }
 ],
 "id": "overlay_1AF9F4C7_14F0_B1BE_4162_A2D3C332F665",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_39352680_2B06_89E0_41AF_CE797F2B7EE8, true, 0, this.effect_3CE0F637_2B0D_8920_419B_EF42110D50F6, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.81,
   "hfov": 6.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.33
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077E60BD_1491_71D2_4175_23A6A1273DDA",
   "pitch": 5.33,
   "yaw": -119.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.86,
   "distance": 100
  }
 ],
 "id": "overlay_1AAE68A0_14F1_F1F3_41AE_175D2436C082",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0, this.camera_3F90B2AE_2E9B_168E_41BC_2097AB14015A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.84,
   "hfov": 13.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077E20BD_1491_71D2_4197_95D0A6DB94B6",
   "pitch": -18.56,
   "yaw": -18.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.05,
   "distance": 100
  }
 ],
 "id": "overlay_1A8DBBFD_14F1_574D_4191_F710F33D41C9",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 157.09,
 "pitch": 40.91,
 "bleaching": 0.7,
 "id": "overlay_3EA72C20_2B0B_F921_41C5_318250796E61"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCC60CA_2E9B_12F1_41A2_95E77CEE5CF4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_1E1A6C54_1471_7153_41A1_C179147AAF47",
 "id": "PanoramaPlayListItem_3FCC60CA_2E9B_12F1_41A2_95E77CEE5CF4",
 "camera": "this.panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCD20CA_2E9B_12F1_41B0_379E0925081E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "media": "this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF",
 "id": "PanoramaPlayListItem_3FCD20CA_2E9B_12F1_41B0_379E0925081E",
 "camera": "this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCDA0D9_2E9B_1292_4180_BF9EABE66EF5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "media": "this.panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895",
 "id": "PanoramaPlayListItem_3FCDA0D9_2E9B_1292_4180_BF9EABE66EF5",
 "camera": "this.panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCE00D9_2E9B_1292_41C0_BBA2227243A1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0",
 "id": "PanoramaPlayListItem_3FCE00D9_2E9B_1292_41C0_BBA2227243A1",
 "camera": "this.panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCED0D9_2E9B_1292_41C5_5C46677EEE16, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3",
 "id": "PanoramaPlayListItem_3FCED0D9_2E9B_1292_41C5_5C46677EEE16",
 "camera": "this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCF40D9_2E9B_1292_41C0_41E45370E486, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E",
 "id": "PanoramaPlayListItem_3FCF40D9_2E9B_1292_41C0_41E45370E486",
 "camera": "this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCFD0D9_2E9B_1292_41C2_74975B2608FC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_1E15065B_1470_B156_41B2_1D767604BB54",
 "id": "PanoramaPlayListItem_3FCFD0D9_2E9B_1292_41C2_74975B2608FC",
 "camera": "this.panorama_1E15065B_1470_B156_41B2_1D767604BB54_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC840D9_2E9B_1292_4188_B42893D2F9DC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "media": "this.panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D",
 "id": "PanoramaPlayListItem_3FC840D9_2E9B_1292_4188_B42893D2F9DC",
 "camera": "this.panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC8B0D9_2E9B_1292_41B3_435B8CE73E2A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "media": "this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734",
 "id": "PanoramaPlayListItem_3FC8B0D9_2E9B_1292_41B3_435B8CE73E2A",
 "camera": "this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC930D9_2E9B_1292_41C6_DDCF221275DF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "media": "this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5",
 "id": "PanoramaPlayListItem_3FC930D9_2E9B_1292_41C6_DDCF221275DF",
 "camera": "this.panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC9A0D9_2E9B_1292_41C7_308F1DC3BC73, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "media": "this.panorama_1E1C21E0_1471_5373_41AB_08A1697D703B",
 "id": "PanoramaPlayListItem_3FC9A0D9_2E9B_1292_41C7_308F1DC3BC73",
 "camera": "this.panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC8C0D9_2E9B_1292_41B9_85F039EE3EB6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "media": "this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72",
 "id": "PanoramaPlayListItem_3FC8C0D9_2E9B_1292_41B9_85F039EE3EB6",
 "camera": "this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC940D9_2E9B_1292_41B3_4652ED60AD9B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "media": "this.panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00",
 "id": "PanoramaPlayListItem_3FC940D9_2E9B_1292_41B3_4652ED60AD9B",
 "camera": "this.panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FC9C0D9_2E9B_1292_41C6_D6AF780DBF6A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "media": "this.panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14",
 "id": "PanoramaPlayListItem_3FC9C0D9_2E9B_1292_41C6_D6AF780DBF6A",
 "camera": "this.panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCA30D9_2E9B_1292_419F_555A857441B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "media": "this.panorama_1E1921D9_1471_F355_41B1_B999948786F3",
 "id": "PanoramaPlayListItem_3FCA30D9_2E9B_1292_419F_555A857441B7",
 "camera": "this.panorama_1E1921D9_1471_F355_41B1_B999948786F3_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCAB0D9_2E9B_1292_41B8_AF898D215607, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
 "media": "this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF",
 "id": "PanoramaPlayListItem_3FCAB0D9_2E9B_1292_41B8_AF898D215607",
 "camera": "this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.trigger('tourEnded')",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3FCB30D9_2E9B_1292_41B5_150AF78D7F19, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
 "media": "this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA",
 "id": "PanoramaPlayListItem_3FCB30D9_2E9B_1292_41B5_150AF78D7F19",
 "camera": "this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_camera"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A0BED01_2B05_98E0_41A6_059674B12563, true, 0, this.effect_3C66D35F_2B1A_8F60_41BC_2785012961EB, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.29,
   "hfov": 6.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0741C0BD_1491_71D2_41B3_5369B41B72D9",
   "pitch": -6.84,
   "yaw": 16.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.84,
   "distance": 100
  }
 ],
 "id": "overlay_1A1E6D4D_14F1_D34D_41B1_21275E2DA0C7",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_035DF984_1B77_AAC1_41AD_BB42A2F9921A, true, 0, this.effect_0637A779_1B48_6643_41B1_A1A99329476B, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.25,
   "hfov": 10.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 195,
      "height": 197
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.52,
   "hfov": 10.1
  }
 ],
 "id": "overlay_1B8DC80D_14F0_D0B2_41B3_CC1561B9234E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14, this.camera_3FB642DD_2E9B_1692_41C3_D08E3D492F8D); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.39,
   "hfov": 12.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.96
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074140BD_1491_71D2_41A9_19CD51D69A87",
   "pitch": -25.96,
   "yaw": 133.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.4,
   "distance": 100
  }
 ],
 "id": "overlay_1A93735F_1490_D74E_4192_2AF043F8711D",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3ACE0D36_2B0A_BB20_41C0_2D44DDAAADA3, true, 0, this.effect_3DA1DD1C_2B1B_98E0_41BE_AECD8D96DBB3, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.49,
   "hfov": 6.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0740B0BD_1491_71D2_41A3_9D121C5F2456",
   "pitch": -5.72,
   "yaw": 149.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.02,
   "distance": 100
  }
 ],
 "id": "overlay_1A63ADBA_1491_53D7_41A7_C3267F4C33EA",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E15065B_1470_B156_41B2_1D767604BB54, this.camera_3FA522EC_2E9B_16B2_4190_3C26071ED1EA); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.63,
   "hfov": 19.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02C2D072_1491_7156_41B1_4D53ED27808C",
   "pitch": -37.47,
   "yaw": -102.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.51,
   "distance": 50
  }
 ],
 "id": "overlay_062E8BC1_1490_D7B5_419A_2DF6A72A04B0",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -175.09,
 "pitch": 51.55,
 "bleaching": 0.7,
 "id": "overlay_3E6C80D7_2B0A_8960_41B0_8962CE5318D3"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E27DB73_1470_D756_41B0_E632A0315C7E, this.camera_3FF9832B_2E9B_17B6_4190_185B36CFD95E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.8,
   "hfov": 15.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E351DF_146F_B34D_41A2_99B65870303A",
   "pitch": -11.91,
   "yaw": -18.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.91,
   "distance": 100
  }
 ],
 "id": "overlay_1BE57E13_14BF_50D5_41A0_C42E9BE4EB91",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90, true, 0, this.effect_3CFD073E_2BFD_9721_41C3_131ED3CAB847, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.87,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074DE0DC_1491_7153_41B4_662D5321DA78",
   "pitch": -1.58,
   "yaw": 4.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1A6CF5D4_14B0_D352_41A9_EBF1040B7E80",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, true, 0, this.effect_3CCC489B_2BFD_79E7_41C3_002B5A3000AE, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.15,
   "hfov": 5.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.37
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074DB0DC_1491_7153_41A6_C426050D811B",
   "pitch": -0.37,
   "yaw": 86.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.47,
   "distance": 100
  }
 ],
 "id": "overlay_1BA4B0B7_14B3_51DE_419A_7A7BC6E45FB5",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, true, 0, this.effect_3C1168CD_2BFE_9960_4183_8D0EBE5ABF6B, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.6,
   "hfov": 4.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.14
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074CC0DC_1491_7153_4168_41BE386094BA",
   "pitch": 0.14,
   "yaw": 126.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.32,
   "distance": 100
  }
 ],
 "id": "overlay_1BF9C27B_14B3_D156_415B_7DF5B63FF2C5",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA, this.camera_3FCAF31B_2E9B_1796_41BE_D46221DC6C8D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.79,
   "hfov": 14.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0A49BB42_1477_B0B6_41B1_055B089BF22A",
   "pitch": -11.42,
   "yaw": 141.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.39,
   "distance": 100
  }
 ],
 "id": "overlay_01A850EC_1490_D172_41B4_209AE25EA4A5",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF, this.camera_3FD412FC_2E9B_1692_41C2_FCA7C090F74A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.04,
   "hfov": 12.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E2D1DF_146F_B34D_4181_AF6985BE54D2",
   "pitch": -9.6,
   "yaw": 65.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.42,
   "distance": 100
  }
 ],
 "id": "overlay_09BE2A94_1470_B1D2_41B1_25C733940D10",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 90.82,
 "pitch": 54,
 "bleaching": 0.7,
 "id": "overlay_3F975DE6_2B0A_9B20_41A5_72CF95C1FF22"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BECB58A_2B0A_8BE0_41C3_FB6BE08328FF, true, 0, this.effect_3C65DE1F_2B0B_791F_41A9_4DD6A12DE529, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.53,
   "hfov": 10.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077F10BD_1491_71D2_416D_49026D7EA4F6",
   "pitch": 5.99,
   "yaw": 57.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.13,
   "distance": 100
  }
 ],
 "id": "overlay_1B1288F1_14F1_5155_4184_7B3B6D9649FB",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895, this.camera_3E61928F_2E9B_168F_41AA_82F8A1C5905C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.02,
   "hfov": 23.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.9
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E8A1D0_146F_B352_418E_23A9F5901843",
   "pitch": -8.9,
   "yaw": 161.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.33,
   "distance": 100
  }
 ],
 "id": "overlay_197DCA0A_14F0_D0B6_41A8_11227ACE18B9",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 153.41,
 "pitch": 52.77,
 "bleaching": 0.7,
 "id": "overlay_3F8D8B8D_2B0B_9FE0_41BA_AEDE4721490B"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3, this.camera_21581137_2E9B_139E_4191_A9E3CEC19224); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.5,
   "hfov": 14.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077B90BD_1491_71D2_41A6_2F9109C2D612",
   "pitch": -16.89,
   "yaw": -93.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.55,
   "distance": 100
  }
 ],
 "id": "overlay_192065AD_1490_B3CD_41A7_321C40824211",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA, this.camera_21527147_2E9B_13FF_41C0_3446979C7332); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.07,
   "hfov": 15.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.36
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E981D0_146F_B352_41A6_2DD9E545C815",
   "pitch": -11.36,
   "yaw": 87.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.68,
   "distance": 100
  }
 ],
 "id": "overlay_1AEEEB91_14EF_F7D5_41A1_E2C8A10CA526",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, true, 0, this.effect_3E963478_2B0E_8920_4195_962952AAA3A6, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.91,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077960BD_1491_71D2_41B3_F21117DA1988",
   "pitch": -1.88,
   "yaw": 24.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1AE94513_14F3_50D6_41B0_BCD6C007198F",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF, this.camera_21259127_2E9B_13BE_41B9_90EAB2D48057); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.99,
   "hfov": 11.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.06
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_077920BD_1491_71D2_4198_06703A166830",
   "pitch": -12.06,
   "yaw": 170.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.21,
   "distance": 100
  }
 ],
 "id": "overlay_1BB3DE84_14B1_51B2_416A_2927C4108301",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90, true, 0, this.effect_3D380B28_2B0E_9F20_41B5_DA7E07FA66FE, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.46,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.04
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_01B565CA_1B49_FA40_41B7_CF4CAFFEAB30",
   "pitch": 0.04,
   "yaw": -146.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_02F1D0DE_1B58_BA41_41B7_60EBE45FD46E",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 7.77,
 "pitch": 38.05,
 "bleaching": 0.7,
 "id": "overlay_3C01864C_1B58_6640_41A1_23E043B178E7"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734, this.camera_3EE20212_2E9B_1191_41C0_0A22FEB98177); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.53,
   "hfov": 13.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_315A7286_1590_D1BE_41B0_7423F24F0882",
   "pitch": -17.28,
   "yaw": -35.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 100
  }
 ],
 "id": "overlay_1A4D9C26_1491_70FE_41A6_F96B44B36D07",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1C21E0_1471_5373_41AB_08A1697D703B, this.camera_3E16E212_2E9B_1191_41C0_012F7D478C89); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.05,
   "hfov": 16.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.65
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_315AD286_1590_D1BE_4194_6192C9EB1610",
   "pitch": -23.65,
   "yaw": 121.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.59,
   "distance": 100
  }
 ],
 "id": "overlay_1A4C65F1_1491_D355_41A9_9A6B0A812AD5",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B4CD3_1471_5155_4192_98212238AC72, this.camera_3E04E221_2E9B_11B2_41B4_020CA1DFE489); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.9,
   "hfov": 12.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_315B0286_1590_D1BE_41B1_C33A6E36E831",
   "pitch": -13.69,
   "yaw": 57.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.05,
   "distance": 100
  }
 ],
 "id": "overlay_1A417910_1493_70D3_4176_F63CA3D55914",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_393690E6_2B06_8920_41B1_0282BB2FAA41, true, 0, this.effect_3DD8E796_2B1D_97E0_41A0_7204998D4DD3, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.91,
   "hfov": 5.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074730CD_1491_71B2_418A_A12F8405C2ED",
   "pitch": -3.63,
   "yaw": -84.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.59,
   "distance": 100
  }
 ],
 "id": "overlay_1A7B228C_1493_51B2_41B0_9451C6207317",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3BEF492F_2B0A_9B20_418E_151B9E09A331, true, 0, this.effect_3DB167D9_2B1D_B763_41B0_4044FD5C5636, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.76,
   "hfov": 8.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0744C0CD_1491_71B2_41A0_E4762688C300",
   "pitch": -5.49,
   "yaw": -100.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.01,
   "distance": 100
  }
 ],
 "id": "overlay_1BABEBE3_1493_5775_4194_54896131AA55",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79, true, 0, this.effect_3C95087C_2B1A_9921_419F_54F0FECFA3D3, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.26,
   "hfov": 12.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.71
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074480CD_1491_71B2_4194_0B833BE79E02",
   "pitch": -10.71,
   "yaw": -152.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.14,
   "distance": 100
  }
 ],
 "id": "overlay_1A506A4A_1490_D0B6_41A9_C4AA4E95A7D2",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_39957054_2B06_8961_41C2_B10917611B1F, true, 0, this.effect_3DC7ACDE_2B1A_B960_418B_39091C3D6049, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.33,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.04
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074470CD_1491_71B2_41A8_281E5C80A814",
   "pitch": -1.04,
   "yaw": -0.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1BDD91D6_1491_B35E_41B3_95054EE9BF34",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3A27A582_2B07_8BE0_41B8_216DB1502149, true, 0, this.effect_3C337125_2B1A_8B20_41B5_6F4A4B7BBA7F, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.37,
   "hfov": 6.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.17
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074410CD_1491_71B2_41B3_E6A12E38FED0",
   "pitch": -7.17,
   "yaw": 154.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.84,
   "distance": 100
  }
 ],
 "id": "overlay_1A71652C_1490_B0F3_41A3_F1645EEE6830",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AD6C928_2B0B_7B20_41AE_59CBAA90A901, true, 0, this.effect_3308609A_2B1B_89E0_41BA_05E4CDCF3207, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.35,
   "hfov": 5.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.18
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0745D0CD_1491_71B2_41A9_3148FBF6097D",
   "pitch": -3.18,
   "yaw": 138.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.38,
   "distance": 100
  }
 ],
 "id": "overlay_1BC8A306_1490_F0BF_41B3_7B7E3525A8A6",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3ADA2C34_2B0A_9920_41A7_375055D9D58E, true, 0, this.effect_3C0CF4D1_2B1A_8960_41A7_747DBD71BFC2, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.91,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074590CD_1491_71B2_418A_1A5BE5F39D9D",
   "pitch": 1.28,
   "yaw": 97.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1AA6BB69_1497_5775_41A0_0FF16A2FF968",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714, true, 0, this.effect_076EAEB6_1BDF_E6C0_41B4_FCB17FBE6E9E, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.05,
   "hfov": 8.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "hfov": 8.29
  }
 ],
 "id": "overlay_01238FBC_1BD8_A6C1_41B7_4B862660B1A3",
 "data": {
  "label": "Image"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -110.45,
 "pitch": 69.14,
 "bleaching": 0.7,
 "id": "overlay_3E6E4954_2B0A_BB60_41C0_B9FD68D83298"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3, this.camera_3EA4E1C4_2E9B_12F1_41A4_4F6159B7958E); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.93,
   "hfov": 15.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E851D0_146F_B352_41A1_81B7F28835F7",
   "pitch": -19.49,
   "yaw": 34.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.91,
   "distance": 100
  }
 ],
 "id": "overlay_1A3E7F59_14F1_CF55_41B3_982640D52B8B",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF, this.camera_3EB181B4_2E9B_1292_4199_7877C79B85DA); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.81,
   "hfov": 20.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.91
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E871D0_146F_B352_41A0_46A93F50FBC0",
   "pitch": -15.91,
   "yaw": 108.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.34,
   "distance": 100
  }
 ],
 "id": "overlay_1A610A4D_14F1_714D_41A7_B73FC6E252C3",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1921D9_1471_F355_41B1_B999948786F3, this.camera_3EDFF1D3_2E9B_1296_41B2_3AB25E907536); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.22,
   "hfov": 18.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.39
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E791D0_146F_B352_41B1_933F1E70A52E",
   "pitch": -16.39,
   "yaw": -85.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.65,
   "distance": 100
  }
 ],
 "id": "overlay_1B1632A1_14F0_F1F2_41A2_5AF4E01DEF63",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3ACF182E_2B0A_9920_41A7_1590F1111FBF, true, 0, this.effect_3D4471F6_2B07_8B20_4178_8960ED5447D8, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.59,
   "hfov": 6.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0743E0BD_1491_71D2_4192_ACA0A792E570",
   "pitch": -14.34,
   "yaw": 172.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.68,
   "distance": 100
  }
 ],
 "id": "overlay_1A15A400_14F3_B0B2_41A1_BC06B0F95280",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E15065B_1470_B156_41B2_1D767604BB54, this.camera_3EBE71A4_2E9B_12B2_41C4_0334401DA511); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.69,
   "hfov": 16.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.19
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_09E851D0_146F_B352_4190_F8F675D90215",
   "pitch": -19.19,
   "yaw": 17.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.48,
   "distance": 50
  }
 ],
 "id": "overlay_1AF8C216_14F1_50DE_417D_8F9641DDAA1E",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": 23.73,
 "pitch": 33.55,
 "bleaching": 0.7,
 "id": "overlay_3F87239A_2B0B_8FE0_41A3_EEC25CBEF380"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895, this.camera_3E9DB185_2E9B_1372_41C1_C46B1F9E56CE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.53,
   "hfov": 13.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.35
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0B395792_1470_DFD7_41AE_016E34043E5E",
   "pitch": -14.35,
   "yaw": -12.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.88,
   "distance": 100
  }
 ],
 "id": "overlay_041E508E_14B1_D1CE_4199_DA776263FB5A",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF, this.camera_217E5166_2E9B_13BE_41B3_586BBA452B17); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.15,
   "hfov": 14.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0B39F792_1470_DFD7_41B2_597EBE81B292",
   "pitch": -10.61,
   "yaw": 81.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.63,
   "distance": 100
  }
 ],
 "id": "overlay_1BEF441B_14B3_50D6_41A5_2326F67E7E84",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, true, 0, this.effect_3CF7163B_2BFF_8920_41BA_91D64C3EFE0A, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.47,
   "hfov": 5.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.97
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074C10DC_1491_7153_41A6_DF40B735C59E",
   "pitch": 0.97,
   "yaw": 107.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.26,
   "distance": 100
  }
 ],
 "id": "overlay_1BA77AC7_14B3_D1BD_41AB_FDB8BD2768BA",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, true, 0, this.effect_3CEFEC48_2BFF_9961_41C1_8E7C8F724E8A, 'showEffect', false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.89,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_074DD0DC_1491_7153_41B4_78047AA6B6B1",
   "pitch": -0.58,
   "yaw": 156.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 100
  }
 ],
 "id": "overlay_1B7874D5_14B3_5152_419B_75DCFB716AC1",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E1A6C54_1471_7153_41A1_C179147AAF47, this.camera_2170B166_2E9B_13BE_41B4_8CCD67C98D5E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.78,
   "hfov": 13.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0B384792_1470_DFD7_41B2_349CC03672CC",
   "pitch": -11.44,
   "yaw": -98.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.82,
   "distance": 100
  }
 ],
 "id": "overlay_1BF1EAE5_14B1_7172_4190_39ACA39E6D1C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1E183619_1471_50D2_41A3_78D4007FABCF, this.camera_216B1175_2E9B_1392_4184_3C8AD3D7364C); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.66,
   "hfov": 14.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.36
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0B38D792_1470_DFD7_4182_7FBCF8C6A842",
   "pitch": -10.36,
   "yaw": 50.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.21,
   "distance": 100
  }
 ],
 "id": "overlay_038E6523_1490_B0F6_41AA_E7589CFAB16D",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "yaw": -175.91,
 "pitch": 58.91,
 "bleaching": 0.7,
 "id": "overlay_3F93325C_2B05_8961_41B0_AF8D85297E18"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_0266A220_1B58_79C0_4185_26184A0A2434",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 44,
 "minHeight": 1,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_0266A220_1B58_79C0_4185_26184A0A2434_rollover.png",
 "maxHeight": 101,
 "propagateClick": false,
 "iconURL": "skin/IconButton_0266A220_1B58_79C0_4185_26184A0A2434.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, true, 0, this.effect_0008F020_1B71_0979_419A_52C9B4AFDBB1, 'showEffect', false)",
 "minWidth": 1,
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_0266E220_1B58_79C0_41B2_D9953CEA5403",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 44,
 "minHeight": 1,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_0266E220_1B58_79C0_41B2_D9953CEA5403_rollover.png",
 "maxHeight": 101,
 "propagateClick": false,
 "iconURL": "skin/IconButton_0266E220_1B58_79C0_41B2_D9953CEA5403.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741, true, 0, this.effect_3C527F33_1B5B_A7C0_4190_FE73871F136E, 'showEffect', false)",
 "minWidth": 1,
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_0266D220_1B58_79C0_41B2_B899B0A17D0C",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 44,
 "minHeight": 1,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_0266D220_1B58_79C0_41B2_B899B0A17D0C_rollover.png",
 "maxHeight": 101,
 "propagateClick": false,
 "iconURL": "skin/IconButton_0266D220_1B58_79C0_41B2_B899B0A17D0C.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.openLink('https://goo.gl/maps/a8QakUmjcvY33pFQ6', '_blank')",
 "minWidth": 1,
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_035CE984_1B77_AAC1_4198_1D4AC1402008",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_003EDF7D_1B48_E640_41A2_44D472271876"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_035D2984_1B77_AAC1_41AA_45AE33430321",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_035DC984_1B77_AAC1_4196_9B83F6073961"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_017E4629_1BF9_99C0_4192_9070D0700C92",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_017E3629_1BF9_99C0_4197_21D9B2BB9C3A"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_017E8629_1BF9_99C0_419F_7EAFA8B86C53",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_01796629_1BF9_99C0_419D_364B1FDC052B"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_2B2F6ADA_1AC8_AE40_41AA_EE60B17B3EBE",
 "left": "2%",
 "shadow": false,
 "backgroundOpacity": 0,
 "right": "2%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_2B2F6ADA_1AC8_AE40_41AA_EE60B17B3EBE.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "5%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image405021"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "id": "IconButton_352DC6F3_1AC8_6640_41B2_CE1C7123EFBD",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "41.62%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_352DC6F3_1AC8_6640_41B2_CE1C7123EFBD_rollover.png",
 "propagateClick": false,
 "top": "45.39%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_352DC6F3_1AC8_6640_41B2_CE1C7123EFBD.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_352DC6F3_1AC8_6640_41B2_CE1C7123EFBD_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0C3450E4_1B33_0AF8_41B3_B0C27601FA6A, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_34525DD8_1ADB_AA41_41B2_7BC90D6077AA",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "21.45%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_34525DD8_1ADB_AA41_41B2_7BC90D6077AA_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_34525DD8_1ADB_AA41_41B2_7BC90D6077AA.png",
 "bottom": "25.84%",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_34525DD8_1ADB_AA41_41B2_7BC90D6077AA_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0C943117_1B51_0B47_41B0_CD703E210940, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_353DB9F1_1ADB_AA40_4186_FD238277DF96",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "16.31%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_353DB9F1_1ADB_AA40_4186_FD238277DF96_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_353DB9F1_1ADB_AA40_4186_FD238277DF96.png",
 "bottom": "35.62%",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_353DB9F1_1ADB_AA40_4186_FD238277DF96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0C6686D5_1B5F_16D8_4180_4EF5C83A3AD2, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_3525A305_1AD8_BFC0_41B2_29505793D483",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "10.03%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_3525A305_1AD8_BFC0_41B2_29505793D483_rollover.png",
 "propagateClick": false,
 "top": "33.65%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_3525A305_1AD8_BFC0_41B2_29505793D483.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_3525A305_1AD8_BFC0_41B2_29505793D483_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0586C894_1B71_1959_41A2_2EFEC6E493DA, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_34DCB6A3_1AD8_A6C0_41B2_C42C3345A5DA",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "34.91%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_34DCB6A3_1AD8_A6C0_41B2_C42C3345A5DA_rollover.png",
 "propagateClick": false,
 "top": "33.06%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_34DCB6A3_1AD8_A6C0_41B2_C42C3345A5DA.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_34DCB6A3_1AD8_A6C0_41B2_C42C3345A5DA_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0E31E2CB_1B31_0EC8_41B5_D62C72D779D8, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_340F046E_1AD8_9A40_419F_FDEEA5B72EED",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "37.45%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_340F046E_1AD8_9A40_419F_FDEEA5B72EED_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_340F046E_1AD8_9A40_419F_FDEEA5B72EED.png",
 "bottom": "31.7%",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_340F046E_1AD8_9A40_419F_FDEEA5B72EED_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_03D81FF4_1B50_F6D9_41B4_9209A0ABCA77, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 5)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_3525E94D_1AD8_EA40_41B9_0AB022D87FBC",
 "left": "43.51%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_3525E94D_1AD8_EA40_41B9_0AB022D87FBC_rollover.png",
 "propagateClick": false,
 "top": "34.43%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_3525E94D_1AD8_EA40_41B9_0AB022D87FBC.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_3525E94D_1AD8_EA40_41B9_0AB022D87FBC_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0C1D26D6_1B51_16D9_41B5_F3F0529FFEAC, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_3540DA6C_1ADF_AE40_41A4_6951DF7B44DC",
 "left": "38.51%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_3540DA6C_1ADF_AE40_41A4_6951DF7B44DC_rollover.png",
 "propagateClick": false,
 "top": "28.37%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_3540DA6C_1ADF_AE40_41A4_6951DF7B44DC.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_3540DA6C_1ADF_AE40_41A4_6951DF7B44DC_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_00824EEA_1B53_F6C9_41A8_0DB6ABCC6682, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_34D06E2A_1ADF_A9C0_41BA_B62FBC0D1647",
 "left": "32.81%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_34D06E2A_1ADF_A9C0_41BA_B62FBC0D1647_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_34D06E2A_1ADF_A9C0_41BA_B62FBC0D1647.png",
 "bottom": "30.72%",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_34D06E2A_1ADF_A9C0_41BA_B62FBC0D1647_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_02654FFC_1B50_F6C9_41AC_052E44D690E4, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_35564296_1AD8_9EC0_41AA_BA2632E2B623",
 "left": "27.81%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_35564296_1AD8_9EC0_41AA_BA2632E2B623_rollover.png",
 "propagateClick": false,
 "top": "28.37%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_35564296_1AD8_9EC0_41AA_BA2632E2B623.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_35564296_1AD8_9EC0_41AA_BA2632E2B623_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_018715D2_1B51_0AD9_4150_5CCFCF568440, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_34A1A5B5_1AD8_FAC3_41B9_BEBCF1F44EFC",
 "left": "18.68%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_34A1A5B5_1AD8_FAC3_41B9_BEBCF1F44EFC_rollover.png",
 "propagateClick": false,
 "top": "22.69%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_34A1A5B5_1AD8_FAC3_41B9_BEBCF1F44EFC.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_34A1A5B5_1AD8_FAC3_41B9_BEBCF1F44EFC_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0197B771_1B4F_37DB_41B2_A4BC395E21E6, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_35578680_1AD8_66C0_41AD_25E6CDBF78D0",
 "left": "10.26%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_35578680_1AD8_66C0_41AD_25E6CDBF78D0_rollover.png",
 "propagateClick": false,
 "top": "22.69%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_35578680_1AD8_66C0_41AD_25E6CDBF78D0.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_35578680_1AD8_66C0_41AD_25E6CDBF78D0_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_018759E8_1B71_3AC9_41B1_39649CC0FF58, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_352A62AB_1AD9_BEC0_41B9_2DE38674AB15",
 "left": "10.12%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_352A62AB_1AD9_BEC0_41B9_2DE38674AB15_rollover.png",
 "propagateClick": false,
 "top": "36.78%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_352A62AB_1AD9_BEC0_41B9_2DE38674AB15.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_352A62AB_1AD9_BEC0_41B9_2DE38674AB15_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_00E8BBC0_1B73_7F38_41AC_A971A64C5A02, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_34FB078A_1AD9_A6C1_41B3_67E5A330566C",
 "left": "17.97%",
 "shadow": false,
 "width": 32,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_34FB078A_1AD9_A6C1_41B3_67E5A330566C_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_34FB078A_1AD9_A6C1_41B3_67E5A330566C.png",
 "bottom": "44.62%",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_34FB078A_1AD9_A6C1_41B3_67E5A330566C_pressed.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_07C828FD_1B73_1ACB_41B9_CCBE0104DFBD, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_351CC8B0_1AC8_6AC0_41A5_32401321C87E",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "23.96%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_351CC8B0_1AC8_6AC0_41A5_32401321C87E_rollover.png",
 "propagateClick": false,
 "top": "33.44%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_351CC8B0_1AC8_6AC0_41A5_32401321C87E.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_351CC8B0_1AC8_6AC0_41A5_32401321C87E_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0D02829C_1B31_0949_41B2_E7D07B199255, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_3460A15A_1ADB_9A40_41AA_A0F05EAA0F24",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "17.03%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_3460A15A_1ADB_9A40_41AA_A0F05EAA0F24_rollover.png",
 "propagateClick": false,
 "top": "33.46%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_3460A15A_1ADB_9A40_41AA_A0F05EAA0F24.png",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_3460A15A_1ADB_9A40_41AA_A0F05EAA0F24_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_04C4E58E_1B4F_0B49_4199_E8C4DF9CE266, 'hideEffect', false)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_0FEBC089_1B57_094B_41AF_E7DF0EDDF6CC",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": 32,
 "right": "24.97%",
 "minHeight": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_0FEBC089_1B57_094B_41AF_E7DF0EDDF6CC_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_0FEBC089_1B57_094B_41AF_E7DF0EDDF6CC.png",
 "bottom": "39.73%",
 "height": 32,
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0FEBC089_1B57_094B_41AF_E7DF0EDDF6CC_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_0C7E7239_1B57_094B_41A2_DAA02457F295, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 15)",
 "minWidth": 0,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3BEBA36F_1B57_0FC7_41A0_00E7231D686E",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3BEB436F_1B57_0FC7_4182_A3CF719DBB91"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3BD6BB22_2B05_BF20_4155_4018BC044352",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_3A662B59_2B05_BF60_418E_5F722CA3798E"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3BD6DB22_2B05_BF20_41C0_83FB5B308F21",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3BD6CB22_2B05_BF20_41C4_E202758B2CD7"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3B990CFB_2B05_F927_41B3_D8E8DC8A6FCF",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_390B6B97_2B7B_7FEF_41C2_36DB7B111E02"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3B996CFB_2B05_F927_41BB_3E63308FF0EA",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3B995CFB_2B05_F927_41BE_643C2E2209EA"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A082D01_2B05_98E0_41B7_617BAA205283",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_3982C5B0_2B7A_8B20_41C4_18C2F5BF587F"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A0BCD01_2B05_98E0_41C4_87AB8EE9E554",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3A0BDD01_2B05_98E0_41C4_8BEECFAEDF37"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3AB6EF05_2B06_B8E0_41C3_11C398719434",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39EB7D26_2B0A_9B20_41B3_BCF4D1F4D943"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3AB73F05_2B06_B8E0_41B9_E86B6440ACEF",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3AB72F05_2B06_B8E0_41AF_D10FDF2196A9"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3994E054_2B06_8961_41B6_6B0989E7E400",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_398507ED_2B0B_7720_4196_331A97E8B890"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_39951054_2B06_8961_419F_CF8C0593EEFD",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_39950054_2B06_8961_41B5_54BCDA4DAA38"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3AD51928_2B0B_7B20_41A4_5E226CE26E57",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39CC6E39_2B0B_9920_41B3_469CAE2D6967"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3AD6F928_2B0B_7B20_418F_F92651ECD842",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3AD6D928_2B0B_7B20_41C0_9433EC604D1A"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3BECF58A_2B0A_8BE0_41BC_74AA8FE9F855",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_399CE4D7_2B0F_8960_41B5_848E52C2E968"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3BEC958A_2B0A_8BE0_41A9_09D4BC9ECA05",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3BEC858A_2B0A_8BE0_41B1_074229B63CF8"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3BEC892F_2B0A_9B20_4191_59B15C6D5B47",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39FDF2D1_2B0E_8960_41BA_885100F01A00"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3BEF692F_2B0A_9B20_41B2_E32C4D920E0A",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3BEF792F_2B0A_9B20_4197_B35C92D1CEC9"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_39F42EA0_2B0D_7920_4193_B3F767C248BF",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39F3B041_2B0D_8960_41A6_CA412EAEDF3A"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_39F4FEA0_2B0D_7920_41B1_D9A9A6816264",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_39F4EEA0_2B0D_7920_418A_C8517E9B136A"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3BC584A3_2B0A_8920_41C1_3E7A1E5D2C6E",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39DFBEAA_2B0D_B920_41BD_C4DAF98C9010"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3BC5E4A3_2B0A_8920_41C1_AD7554C6A6D7",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3BC5F4A3_2B0A_8920_41BE_DB8F0C406DB5"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3AE53767_2B0A_F720_41BB_4AAFA8705DC9",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39A623F9_2B0B_8F20_418E_A69A6063DBA7"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3AE50767_2B0A_F720_41B1_63472979F86F",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3AE57767_2B0A_F720_41B0_4854952E32D6"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3830EC2B_2B0A_9920_41B0_F84B5CE57617",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_395121D8_2B0B_8B60_41BF_F85B40DC8AAE"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_38308C2C_2B0A_9920_41BF_9FD0FA0BFF9F",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3830BC2C_2B0A_9920_41C4_198C95DEAD64"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3AC17024_2B0A_8920_41A7_7DB0345183A5",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_3950BFAC_2B0A_B720_41C3_2C3030E27A3C"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3AC15024_2B0A_8920_41B3_DDC35F977464",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3AC12024_2B0A_8920_4126_652D599AAFE0"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3ADBEC34_2B0A_9920_41BE_7A09E2DCD1B2",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_399AFC35_2B05_9923_41B0_340AA7748178"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3ADA0C34_2B0A_9920_41BE_863CDA76AF92",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3ADA1C34_2B0A_9920_41C2_E93EC09CABF3"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A336F86_2B0A_B7E1_41A3_D09F0CF73152",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39F13B19_2B06_98E0_41C1_A9C90DBD0190"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A338F86_2B0A_B7E1_41B5_7E59F7885A9C",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3A33BF86_2B0A_B7E1_41C4_8E2512C99E6A"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A39B450_2B0A_8960_41A9_9EC15F953759",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_38056B24_2B07_BF21_41A8_F8A3542C2154"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A399450_2B0A_8960_41BE_84B416D27D1C",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.Container_0F99F77A_2B7B_9720_41C0_76A76082CCA7",
  "this.Container_09587F57_2B07_7760_41B2_31F75120F3FD"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3ACF482E_2B0A_9920_41A2_67EC953C00C0",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39F14F7A_2B06_9720_41BB_4E2DDEE5F5DC"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3ACF682E_2B0A_9920_41C0_7578C95933B8",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3ACF082E_2B0A_9920_41BA_D7751F337C02"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3ACE5D35_2B0A_BB20_41C1_C4A45DDFBCBC",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_3980C528_2B05_8B20_41C5_1F675CA29E7C"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3ACE7D35_2B0A_BB20_41B6_7E7B803CC933",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3ACE1D36_2B0A_BB20_41A5_D1EC0127D41D"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A02B612_2B0A_88E0_41C2_660318AD7712",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39A61478_2B1F_8920_41BE_4CA0A914C128"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A029612_2B0A_88E0_41B2_73A26D0C61C8",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.Container_0FB497BA_2B06_B720_41B9_2FFD3D1C43BB",
  "this.Container_0A5FD966_2B0E_BB20_41B7_1264E0D2CD3E"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A33CB8F_2B05_9FE0_41B8_30620F27EC4E",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_3827FDA4_2B1E_FB20_4158_AD87946ABE40"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A33EB8F_2B05_9FE0_41AB_0286401B148F",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3A33FB8F_2B05_9FE0_418B_4A1FD67C191B"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3AE118E6_2B06_9920_41C0_DBB1E29AF15C",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_349F488B_2B0E_B9E0_4198_AE91EF33ECE9"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3AE158E6_2B06_9920_41B6_1659188E26C2",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.Container_0EC6D373_2B06_8F20_41B0_D579231A8B86",
  "this.Container_35037C2F_2B0A_993F_41B7_75A0E257FA6E"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 15,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A79DCF2_2B06_B921_41B7_DC095CCB86DF",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_38377A9F_2B1D_B9E0_41AB_D99F1B21FFED"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A79FCF2_2B06_B921_41AE_13BE5A58C375",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3A79ECF2_2B06_B921_4191_B1F8549A53B0"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3934F680_2B06_89E0_41C1_1998F995D1A1",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_399E93EE_2B1A_8F20_41A1_D164958F27B7"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3934D680_2B06_89E0_41A8_DFCE1401907C",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_39353680_2B06_89E0_41C2_6FB4CEC0C14F"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3AF6288E_2B06_99E0_41C0_B28A26D11528",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_387DF31D_2B05_88E0_41BE_93F52B9B9D29"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3AF6C88E_2B06_99E0_419E_A9CB034027AB",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3AF6E88E_2B06_99E0_41A8_9596CD5334AF"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3936E0E6_2B06_8920_418E_3C3CF8E70340",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_396B16A9_2B06_8920_41C5_10873635EC00"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3936C0E6_2B06_8920_41AA_CB6FCB4B8030",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3936B0E6_2B06_8920_41B4_ABFFDB6A1B7D"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_3A27E582_2B07_8BE0_41C4_EE12FAD5488B",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Image_39889945_2B07_BB60_41C4_0F6F83208C6E"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 2,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_3A27C582_2B07_8BE0_416A_2A5BA70DBFA0",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_3A27B582_2B07_8BE0_41C1_D3BE29F9F545"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 2
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_0061BE9A_1BC8_E6C0_41B4_30CE2A306ADC",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_3D08C26F_1B58_BE40_4181_5D86D9C1E423"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_00617E9A_1BC8_E6C0_41B7_A4B35A574CDB",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_00615E9A_1BC8_E6C0_41A2_C83E1E0FFCAC"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_0A8FE213_19C8_99C0_41B4_FB2191492F0A",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_01907F81_1BCF_A6C3_41B8_9E3331AB73DE"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_0A8F3213_19C8_99C0_418F_54A2210726CB",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_0A8F1213_19C8_99C0_4197_7551A85F5890"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_00DD0BF2_1B58_AE41_41B1_85FA9B079008",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_06C2BE7B_1BC8_A640_41A9_3CFFEFFEC423"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_00DC7BF2_1B58_AE41_418F_91E8B3EA9CCA",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_00DC1BF2_1B58_AE41_41B2_DF27400F3869"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_0C6D9D32_19C8_EBC0_41A4_4D884565E7D2",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_012B78BC_1B48_6AC0_41BA_6907E497B230"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_0C2DBD32_19C8_EBC0_41B3_558529BD6B20",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_0C2DED32_19C8_EBC0_41AF_F5FA527AE8FC"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_032DBB9C_1B5F_AEC1_41AE_E8DFBF8F79E3",
 "left": "10%",
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "gap": 10,
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_032EFB9C_1B5F_AEC1_41B7_2139CCEAF85F",
 "left": "10%",
 "shadow": false,
 "children": [
  "this.IconButton_032E9B9C_1B5F_AEC1_41B9_C310DC8DED86"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Container",
 "top": "5%",
 "propagateClick": false,
 "paddingRight": 20,
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_03290701_1B5F_E7C3_41B5_136C7ABC57E0",
 "left": "2%",
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_3DFD1738_1B48_E7C0_41B2_0AF5D86EB184"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "maxWidth": 1000,
 "id": "Container_0329C701_1B5F_E7C3_416C_C4F11ED45FD7",
 "left": "2%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "children": [
  "this.IconButton_032A2701_1B5F_E7C3_41B3_2D056641AD2E"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "gap": 0,
 "minWidth": 1
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E871D0_146F_B352_41B3_B2465F4751F5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0740F0BD_1491_71D2_41A9_CFFB98A9742F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0740B0BD_1491_71D2_41A5_0C6E55E39252",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E7C1D0_146F_B352_419D_514F391EFE52",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E15065B_1470_B156_41B2_1D767604BB54_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_0B4D3783_1470_DFB6_4187_B65A54CCA52C",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_074890CD_1491_71B2_4174_7332AA5A2DBB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3167E286_1590_D1BE_41AA_D6A3059FC06A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074800CD_1491_71B2_41B0_26280984D8A7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0749C0CD_1491_71B2_4199_381BFB339564",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074960CD_1491_71B2_41AE_DDF1A7906E79",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1EF800_1471_B0B2_41A8_B3EDDFEFFA00_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074920CD_1491_71B2_41A3_A6CE6EF54491",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1A6C54_1471_7153_41A1_C179147AAF47_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_02DFA081_1491_71B5_41B4_8E8BE5EE3C49",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_31581286_1590_D1BE_41A9_1DF7920A3652",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074030BD_1491_71D2_41A5_BB60D3B9D223",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0741C0BD_1491_71D2_4192_1E2D60E5745C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074120BD_1491_71D2_41AF_71732B129022",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0746C0BD_1491_71D2_4198_D62CA6F710DF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31595286_1590_D1BE_4175_96A95C832F36",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3159A286_1590_D1BE_417C_97903D098D7A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_315A1286_1590_D1BE_41A5_F584409DE4C6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B9C2D_1471_50CD_419D_81B6714B8734_0_HS_10_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_01AC05D9_1B49_FA43_41B2_3CAFB812CFEE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074F60CD_1491_71B2_4193_D04D9CA781D7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1921D9_1471_F355_41B1_B999948786F3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_074F30CD_1491_71B2_41AF_964CF2DC163D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E8C1D0_146F_B352_419B_E7F9CC7C69E9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_077C50BD_1491_71D2_41AB_34C041688329",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_077DE0BD_1491_71D2_4181_DA55AAFD559D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_077DA0BD_1491_71D2_41AB_DF7E2C25D308",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_077D60BD_1491_71D2_41A0_60F8E8B97DCF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B705D_1470_D14D_41A4_F4EC76F402A3_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_077D00BD_1491_71D2_41A7_4D4EF639B420",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_074AF0CD_1491_71B2_41A1_0E9EC4633E52",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_31661286_1590_D1BE_41A0_AA4E2362D49C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074A50CD_1491_71B2_419F_C114869EB245",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074A30CD_1491_71B2_41A6_6BF1626201A6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3166D286_1590_D1BE_41B2_20E522AA099D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074B40CD_1491_71B2_417A_6764B004E09A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074B30CD_1491_71B2_41B2_DE1AA004E53D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B4CD3_1471_5155_4192_98212238AC72_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0748C0CD_1491_71B2_4199_2AC8E50F3554",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31646286_1590_D1BE_4136_7C7262949B44",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074AA0CD_1491_71B2_41B3_9D6B3A5CC1ED",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0745E0CD_1491_71B2_41B3_F07A045FE8C2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0745D0CD_1491_71B2_417D_54BB57997883",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074560CD_1491_71B2_41B4_C7B30A109D90",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1C21E0_1471_5373_41AB_08A1697D703B_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074520CD_1491_71B2_41A7_8D4A3FBB98BC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_074EF0CD_1491_71B2_41B1_3900FEDD969B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074EB0CD_1491_71B2_418C_047736D4E280",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B44C783_1470_DFB6_41AB_D67CF3E64F55",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074E00CD_1491_71B2_41B2_D4BCDE8F2297",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1B43D4_1471_D752_41AD_FA3C2E812A14_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074FC0CD_1491_71B2_41B1_C9F8CCD6C76F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E9D1D0_146F_B352_41AF_60C7C0B3C3CC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_077E60BD_1491_71D2_4175_23A6A1273DDA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E39B006_1470_D0BE_41AD_1C03ADE91895_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_077E20BD_1491_71D2_4197_95D0A6DB94B6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0741C0BD_1491_71D2_41B3_5369B41B72D9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_074140BD_1491_71D2_41A9_19CD51D69A87",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0740B0BD_1491_71D2_41A3_9D121C5F2456",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E1FF10D_1471_50B2_41AA_3061B7C0168D_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_02C2D072_1491_7156_41B1_4D53ED27808C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E351DF_146F_B34D_41A2_99B65870303A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074DE0DC_1491_7153_41B4_662D5321DA78",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074DB0DC_1491_7153_41A6_C426050D811B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074CC0DC_1491_7153_4168_41BE386094BA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0A49BB42_1477_B0B6_41B1_055B089BF22A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E183619_1471_50D2_41A3_78D4007FABCF_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_09E2D1DF_146F_B34D_4181_AF6985BE54D2",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_077F10BD_1491_71D2_416D_49026D7EA4F6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19F58A_1470_F3B7_41A2_ECC0E24CFAA0_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_09E8A1D0_146F_B352_418E_23A9F5901843",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_077B90BD_1491_71D2_41A6_2F9109C2D612",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E981D0_146F_B352_41A6_2DD9E545C815",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_077960BD_1491_71D2_41B3_F21117DA1988",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_077920BD_1491_71D2_4198_06703A166830",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1EF83447_147F_50BD_41B2_6AA9323D92EF_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_01B565CA_1B49_FA40_41B7_CF4CAFFEAB30",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_315A7286_1590_D1BE_41B0_7423F24F0882",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_315AD286_1590_D1BE_4194_6192C9EB1610",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_315B0286_1590_D1BE_41B1_C33A6E36E831",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074730CD_1491_71B2_418A_A12F8405C2ED",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0744C0CD_1491_71B2_41A0_E4762688C300",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074480CD_1491_71B2_4194_0B833BE79E02",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074470CD_1491_71B2_41A8_281E5C80A814",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074410CD_1491_71B2_41B3_E6A12E38FED0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0745D0CD_1491_71B2_41A9_3148FBF6097D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E19A6FC_1471_7153_418C_D6A1090BEBB5_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074590CD_1491_71B2_418A_1A5BE5F39D9D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E851D0_146F_B352_41A1_81B7F28835F7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E871D0_146F_B352_41A0_46A93F50FBC0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E791D0_146F_B352_41B1_933F1E70A52E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_0743E0BD_1491_71D2_4192_ACA0A792E570",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E27DB73_1470_D756_41B0_E632A0315C7E_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_09E851D0_146F_B352_4190_F8F675D90215",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B395792_1470_DFD7_41AE_016E34043E5E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B39F792_1470_DFD7_41B2_597EBE81B292",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074C10DC_1491_7153_41A6_DF40B735C59E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_074DD0DC_1491_7153_41B4_78047AA6B6B1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B384792_1470_DFD7_41B2_349CC03672CC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1E11D124_1471_70F3_41A1_18B0EFCC39AA_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B38D792_1470_DFD7_4182_7FBCF8C6A842",
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_003EDF7D_1B48_E640_41A2_44D472271876",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_003EDF7D_1B48_E640_41A2_44D472271876.jpeg",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100.055%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image277522"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_035DC984_1B77_AAC1_4196_9B83F6073961",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_035DC984_1B77_AAC1_4196_9B83F6073961.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_035DF984_1B77_AAC1_41AD_BB42A2F9921A, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_035DC984_1B77_AAC1_4196_9B83F6073961_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Container_017E3629_1BF9_99C0_4197_21D9B2BB9C3A",
 "backgroundOpacity": 1,
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "width": "99.977%",
 "children": [
  "this.Container_017E0629_1BF9_99C0_41B9_89EEC278E4AB",
  "this.Container_017EE629_1BF9_99C0_418D_A67A1CCD87D6"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "class": "Container",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "gap": 0,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_01796629_1BF9_99C0_419D_364B1FDC052B",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_01796629_1BF9_99C0_419D_364B1FDC052B.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_01796629_1BF9_99C0_419D_364B1FDC052B_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3BEB436F_1B57_0FC7_4182_A3CF719DBB91",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "7.153%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3BEB436F_1B57_0FC7_4182_A3CF719DBB91.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "-27.513%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_34EEEA3E_1ACF_A9C0_41B7_E1D06E3EAC3E, false, 0, this.effect_3913A0B8_1B51_0949_41B6_352AD61DF5FE, 'hideEffect', false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3BEB436F_1B57_0FC7_4182_A3CF719DBB91_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_3A662B59_2B05_BF60_418E_5F722CA3798E",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_3A662B59_2B05_BF60_418E_5F722CA3798E.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image27614"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3BD6CB22_2B05_BF20_41C4_E202758B2CD7",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3BD6CB22_2B05_BF20_41C4_E202758B2CD7.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3BD6FB22_2B05_BF20_4195_3F5830E53B90, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3BD6CB22_2B05_BF20_41C4_E202758B2CD7_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_390B6B97_2B7B_7FEF_41C2_36DB7B111E02",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_390B6B97_2B7B_7FEF_41C2_36DB7B111E02.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image27961"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3B995CFB_2B05_F927_41BE_643C2E2209EA",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3B995CFB_2B05_F927_41BE_643C2E2209EA.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3B994CFB_2B05_F927_4170_392B5993BD5E, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3B995CFB_2B05_F927_41BE_643C2E2209EA_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_3982C5B0_2B7A_8B20_41C4_18C2F5BF587F",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_3982C5B0_2B7A_8B20_41C4_18C2F5BF587F.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image28523"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A0BDD01_2B05_98E0_41C4_8BEECFAEDF37",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A0BDD01_2B05_98E0_41C4_8BEECFAEDF37.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A0BED01_2B05_98E0_41A6_059674B12563, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A0BDD01_2B05_98E0_41C4_8BEECFAEDF37_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39EB7D26_2B0A_9B20_41B3_BCF4D1F4D943",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39EB7D26_2B0A_9B20_41B3_BCF4D1F4D943.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image30690"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3AB72F05_2B06_B8E0_41AF_D10FDF2196A9",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3AB72F05_2B06_B8E0_41AF_D10FDF2196A9.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3AB74F05_2B06_B8E0_41B5_B0123448D78B, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3AB72F05_2B06_B8E0_41AF_D10FDF2196A9_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_398507ED_2B0B_7720_4196_331A97E8B890",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_398507ED_2B0B_7720_4196_331A97E8B890.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image31046"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_39950054_2B06_8961_41B5_54BCDA4DAA38",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_39950054_2B06_8961_41B5_54BCDA4DAA38.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39957054_2B06_8961_41C2_B10917611B1F, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_39950054_2B06_8961_41B5_54BCDA4DAA38_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39CC6E39_2B0B_9920_41B3_469CAE2D6967",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39CC6E39_2B0B_9920_41B3_469CAE2D6967.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image31204"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3AD6D928_2B0B_7B20_41C0_9433EC604D1A",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3AD6D928_2B0B_7B20_41C0_9433EC604D1A.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3AD6C928_2B0B_7B20_41AE_59CBAA90A901, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3AD6D928_2B0B_7B20_41C0_9433EC604D1A_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_399CE4D7_2B0F_8960_41B5_848E52C2E968",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_399CE4D7_2B0F_8960_41B5_848E52C2E968.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image32101"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3BEC858A_2B0A_8BE0_41B1_074229B63CF8",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3BEC858A_2B0A_8BE0_41B1_074229B63CF8.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3BECB58A_2B0A_8BE0_41C3_FB6BE08328FF, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3BEC858A_2B0A_8BE0_41B1_074229B63CF8_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39FDF2D1_2B0E_8960_41BA_885100F01A00",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39FDF2D1_2B0E_8960_41BA_885100F01A00.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image32414"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3BEF792F_2B0A_9B20_4197_B35C92D1CEC9",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3BEF792F_2B0A_9B20_4197_B35C92D1CEC9.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3BEF492F_2B0A_9B20_418E_151B9E09A331, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3BEF792F_2B0A_9B20_4197_B35C92D1CEC9_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39F3B041_2B0D_8960_41A6_CA412EAEDF3A",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39F3B041_2B0D_8960_41A6_CA412EAEDF3A.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image32691"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_39F4EEA0_2B0D_7920_418A_C8517E9B136A",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_39F4EEA0_2B0D_7920_418A_C8517E9B136A.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39F4DEA0_2B0D_7920_41B1_822F70D2D9EE, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_39F4EEA0_2B0D_7920_418A_C8517E9B136A_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39DFBEAA_2B0D_B920_41BD_C4DAF98C9010",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39DFBEAA_2B0D_B920_41BD_C4DAF98C9010.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image32949"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3BC5F4A3_2B0A_8920_41BE_DB8F0C406DB5",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3BC5F4A3_2B0A_8920_41BE_DB8F0C406DB5.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3BC5C4A3_2B0A_8920_41A0_30960350ECD2, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3BC5F4A3_2B0A_8920_41BE_DB8F0C406DB5_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39A623F9_2B0B_8F20_418E_A69A6063DBA7",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39A623F9_2B0B_8F20_418E_A69A6063DBA7.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image33241"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3AE57767_2B0A_F720_41B0_4854952E32D6",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3AE57767_2B0A_F720_41B0_4854952E32D6.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3AE56767_2B0A_F720_41BD_3E937A1A9F79, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3AE57767_2B0A_F720_41B0_4854952E32D6_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_395121D8_2B0B_8B60_41BF_F85B40DC8AAE",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_395121D8_2B0B_8B60_41BF_F85B40DC8AAE.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image33447"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3830BC2C_2B0A_9920_41C4_198C95DEAD64",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3830BC2C_2B0A_9920_41C4_198C95DEAD64.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_38315C2C_2B0A_9920_41C5_5C7EEE37B88C, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3830BC2C_2B0A_9920_41C4_198C95DEAD64_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_3950BFAC_2B0A_B720_41C3_2C3030E27A3C",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_3950BFAC_2B0A_B720_41C3_2C3030E27A3C.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image33652"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3AC12024_2B0A_8920_4126_652D599AAFE0",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3AC12024_2B0A_8920_4126_652D599AAFE0.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3AC13024_2B0A_8920_41AF_F379FBA07AF0, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3AC12024_2B0A_8920_4126_652D599AAFE0_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_399AFC35_2B05_9923_41B0_340AA7748178",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_399AFC35_2B05_9923_41B0_340AA7748178.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image33873"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3ADA1C34_2B0A_9920_41C2_E93EC09CABF3",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3ADA1C34_2B0A_9920_41C2_E93EC09CABF3.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3ADA2C34_2B0A_9920_41A7_375055D9D58E, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3ADA1C34_2B0A_9920_41C2_E93EC09CABF3_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39F13B19_2B06_98E0_41C1_A9C90DBD0190",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39F13B19_2B06_98E0_41C1_A9C90DBD0190.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image34094"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A33BF86_2B0A_B7E1_41C4_8E2512C99E6A",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A33BF86_2B0A_B7E1_41C4_8E2512C99E6A.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A33AF86_2B0A_B7E1_41A3_A364B6A78697, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A33BF86_2B0A_B7E1_41C4_8E2512C99E6A_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_38056B24_2B07_BF21_41A8_F8A3542C2154",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_38056B24_2B07_BF21_41A8_F8A3542C2154.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image34285"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0F99F77A_2B7B_9720_41C0_76A76082CCA7",
 "backgroundOpacity": 0,
 "shadow": false,
 "children": [
  "this.IconButton_3A398450_2B0A_8960_41A0_020B63CF4054"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "78.865%",
 "verticalAlign": "top",
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container186650"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_09587F57_2B07_7760_41B2_31F75120F3FD",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Button_0963FEC9_2B07_7960_419D_396E53DF205C"
 ],
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "height": 96.7,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container154343"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39F14F7A_2B06_9720_41BB_4E2DDEE5F5DC",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39F14F7A_2B06_9720_41BB_4E2DDEE5F5DC.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image34507"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3ACF082E_2B0A_9920_41BA_D7751F337C02",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3ACF082E_2B0A_9920_41BA_D7751F337C02.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3ACF182E_2B0A_9920_41A7_1590F1111FBF, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3ACF082E_2B0A_9920_41BA_D7751F337C02_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_3980C528_2B05_8B20_41C5_1F675CA29E7C",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_3980C528_2B05_8B20_41C5_1F675CA29E7C.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image34800"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3ACE1D36_2B0A_BB20_41A5_D1EC0127D41D",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3ACE1D36_2B0A_BB20_41A5_D1EC0127D41D.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3ACE0D36_2B0A_BB20_41C0_2D44DDAAADA3, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3ACE1D36_2B0A_BB20_41A5_D1EC0127D41D_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39A61478_2B1F_8920_41BE_4CA0A914C128",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39A61478_2B1F_8920_41BE_4CA0A914C128.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image35053"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0FB497BA_2B06_B720_41B9_2FFD3D1C43BB",
 "backgroundOpacity": 0,
 "shadow": false,
 "children": [
  "this.IconButton_3A028612_2B0A_88E0_41B1_2CCFDA696C26"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "74.995%",
 "verticalAlign": "top",
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container186116"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0A5FD966_2B0E_BB20_41B7_1264E0D2CD3E",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Button_0A6538D6_2B0E_B960_41C2_19EF9EE62CCF"
 ],
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "height": 100,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container154343"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_3827FDA4_2B1E_FB20_4158_AD87946ABE40",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_3827FDA4_2B1E_FB20_4158_AD87946ABE40.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image35266"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A33FB8F_2B05_9FE0_418B_4A1FD67C191B",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A33FB8F_2B05_9FE0_418B_4A1FD67C191B.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A330B8F_2B05_9FE0_41C5_643880718E64, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A33FB8F_2B05_9FE0_418B_4A1FD67C191B_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_349F488B_2B0E_B9E0_4198_AE91EF33ECE9",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Image_397C7BD3_2B1D_9F60_419B_B92AF9E81696"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container153998"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0EC6D373_2B06_8F20_41B0_D579231A8B86",
 "backgroundOpacity": 0,
 "shadow": false,
 "children": [
  "this.IconButton_3AE168E6_2B06_9920_41BF_ECD19FB23242"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75.917%",
 "verticalAlign": "top",
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container185428"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_35037C2F_2B0A_993F_41B7_75A0E257FA6E",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Button_35146402_2B0B_88E0_4174_029BD8FB835C"
 ],
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "height": 100,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container154343"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_38377A9F_2B1D_B9E0_41AB_D99F1B21FFED",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_38377A9F_2B1D_B9E0_41AB_D99F1B21FFED.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image35677"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A79ECF2_2B06_B921_4191_B1F8549A53B0",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A79ECF2_2B06_B921_4191_B1F8549A53B0.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A761CF2_2B06_B921_41C1_9CC53AE65EE9, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A79ECF2_2B06_B921_4191_B1F8549A53B0_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_399E93EE_2B1A_8F20_41A1_D164958F27B7",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_399E93EE_2B1A_8F20_41A1_D164958F27B7.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image35889"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_39353680_2B06_89E0_41C2_6FB4CEC0C14F",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_39353680_2B06_89E0_41C2_6FB4CEC0C14F.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39352680_2B06_89E0_41AF_CE797F2B7EE8, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_39353680_2B06_89E0_41C2_6FB4CEC0C14F_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_387DF31D_2B05_88E0_41BE_93F52B9B9D29",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_387DF31D_2B05_88E0_41BE_93F52B9B9D29.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image36101"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3AF6E88E_2B06_99E0_41A8_9596CD5334AF",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3AF6E88E_2B06_99E0_41A8_9596CD5334AF.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3AF6F88E_2B06_99E0_41AF_21D483D6030D, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3AF6E88E_2B06_99E0_41A8_9596CD5334AF_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_396B16A9_2B06_8920_41C5_10873635EC00",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_396B16A9_2B06_8920_41C5_10873635EC00.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image36305"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3936B0E6_2B06_8920_41B4_ABFFDB6A1B7D",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3936B0E6_2B06_8920_41B4_ABFFDB6A1B7D.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_393690E6_2B06_8920_41B1_0282BB2FAA41, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3936B0E6_2B06_8920_41B4_ABFFDB6A1B7D_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_39889945_2B07_BB60_41C4_0F6F83208C6E",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_39889945_2B07_BB60_41C4_0F6F83208C6E.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image36549"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A27B582_2B07_8BE0_41C1_D3BE29F9F545",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "4.529%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A27B582_2B07_8BE0_41C1_D3BE29F9F545.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "8.955%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A27A582_2B07_8BE0_41B8_216DB1502149, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A27B582_2B07_8BE0_41C1_D3BE29F9F545_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "WebFrame_3D08C26F_1B58_BE40_4181_5D86D9C1E423",
 "backgroundOpacity": 1,
 "shadow": false,
 "width": "99.977%",
 "minHeight": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://sketchfab.com/models/59d669e357904550a54fbbbdc1a8a9f8/embed",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame362102"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_00615E9A_1BC8_E6C0_41A2_C83E1E0FFCAC",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_00615E9A_1BC8_E6C0_41A2_C83E1E0FFCAC.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0066AE9A_1BC8_E6C0_41A1_C0491F4EF140, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_00615E9A_1BC8_E6C0_41A2_C83E1E0FFCAC_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "WebFrame_01907F81_1BCF_A6C3_41B8_9E3331AB73DE",
 "backgroundOpacity": 1,
 "shadow": false,
 "width": "99.977%",
 "minHeight": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://sketchfab.com/models/66f5377b6b594823a5de46f027b5ca55/embed",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame297030"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_0A8F1213_19C8_99C0_4197_7551A85F5890",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_0A8F1213_19C8_99C0_4197_7551A85F5890.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0A8EE213_19C8_99C0_41AE_E02524E71AD1, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0A8F1213_19C8_99C0_4197_7551A85F5890_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "WebFrame_06C2BE7B_1BC8_A640_41A9_3CFFEFFEC423",
 "backgroundOpacity": 1,
 "shadow": false,
 "width": "99.98%",
 "minHeight": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://sketchfab.com/models/8b436460717647b9863aaab1f00b63a1/embed",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame297301"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_00DC1BF2_1B58_AE41_41B2_DF27400F3869",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_00DC1BF2_1B58_AE41_41B2_DF27400F3869.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_00DC1BF2_1B58_AE41_41B2_DF27400F3869_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "WebFrame_012B78BC_1B48_6AC0_41BA_6907E497B230",
 "backgroundOpacity": 1,
 "shadow": false,
 "width": "99.98%",
 "minHeight": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://sketchfab.com/models/86664056f11f4328b6f858bab0b81070/embed",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame284417"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_0C2DED32_19C8_EBC0_41AF_F5FA527AE8FC",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_0C2DED32_19C8_EBC0_41AF_F5FA527AE8FC.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_0C2DDD32_19C8_EBC0_4188_ACB701906BFE, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0C2DED32_19C8_EBC0_41AF_F5FA527AE8FC_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_032E9B9C_1B5F_AEC1_41B9_C310DC8DED86",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_032E9B9C_1B5F_AEC1_41B9_C310DC8DED86.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_032EAB9C_1B5F_AEC1_41A7_8EDE9E1FC9D6, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_032E9B9C_1B5F_AEC1_41B9_C310DC8DED86_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "id": "WebFrame_3DFD1738_1B48_E7C0_41B2_0AF5D86EB184",
 "backgroundOpacity": 1,
 "shadow": false,
 "width": "99.977%",
 "minHeight": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://sketchfab.com/models/e97087b2ebc248a5b15e046a67ddb905/embed",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame362268"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_032A2701_1B5F_E7C3_41B3_2D056641AD2E",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_032A2701_1B5F_E7C3_41B3_2D056641AD2E.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_032A3701_1B5F_E7C3_41AC_140519F0550B, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_032A2701_1B5F_E7C3_41B3_2D056641AD2E_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_017E0629_1BF9_99C0_41B9_89EEC278E4AB",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.HTMLText_017EC629_1BF9_99C0_417B_0953E07A0303"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 100,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "gap": 0,
 "minWidth": 1
},
{
 "horizontalAlign": "left",
 "maxWidth": 1000,
 "id": "Container_017EE629_1BF9_99C0_418D_A67A1CCD87D6",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "width": "100%",
 "children": [
  "this.Container_0636FEF7_1BC8_6640_41BA_3F749B7346A8",
  "this.Container_017EA629_1BF9_99C0_4183_882FFD4A83F1",
  "this.Container_04418F29_1BD8_67C0_41B9_1F425DC253A2",
  "this.Container_056A6CE0_1BD9_EA41_41B8_662354D1BA04"
 ],
 "scrollBarMargin": 2,
 "minHeight": 400,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "maxHeight": 600,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "gap": 0,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A398450_2B0A_8960_41A0_020B63CF4054",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "5.9%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A398450_2B0A_8960_41A0_020B63CF4054.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "14.778%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A39F450_2B0A_8960_41B1_3C0230264486, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A398450_2B0A_8960_41A0_020B63CF4054_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_0963FEC9_2B07_7960_419D_396E53DF205C",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 186,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "Tampilkan Model 3D",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_0C2DDD32_19C8_EBC0_4188_ACB701906BFE, true, 0, this.effect_0E95A8EB_2B1A_B920_41B4_18E671A85DA6, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 63,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "22px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3A028612_2B0A_88E0_41B1_2CCFDA696C26",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3A028612_2B0A_88E0_41B1_2CCFDA696C26.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "25%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3A7D7612_2B0A_88E0_41C3_42321CFBB9C5, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3A028612_2B0A_88E0_41B1_2CCFDA696C26_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_0A6538D6_2B0E_B960_41C2_19EF9EE62CCF",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 173,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "Tampilkan Model 3D",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_032A3701_1B5F_E7C3_41AC_140519F0550B, true, 0, this.effect_08173DE6_2B1A_FB20_41A7_8B28E09F200C, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 65,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "22px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "id": "Image_397C7BD3_2B1D_9F60_419B_B92AF9E81696",
 "left": "0%",
 "shadow": false,
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 400,
 "borderRadius": 0,
 "url": "skin/Image_397C7BD3_2B1D_9F60_419B_B92AF9E81696.png",
 "class": "Image",
 "maxHeight": 600,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image35473"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_3AE168E6_2B06_9920_41BF_ECD19FB23242",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "25%",
 "minHeight": 50,
 "borderRadius": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "propagateClick": false,
 "iconURL": "skin/IconButton_3AE168E6_2B06_9920_41BF_ECD19FB23242.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "25%",
 "mode": "push",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_3AE178E6_2B06_9920_41C4_DB2932F568C9, false, 0, null, null, false)",
 "minWidth": 50,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3AE168E6_2B06_9920_41BF_ECD19FB23242_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_35146402_2B0B_88E0_4174_029BD8FB835C",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 204,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "Tampilkan Model 3D",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_0A8EE213_19C8_99C0_41AE_E02524E71AD1, true, 0, this.effect_0B09E5F6_2B07_8B20_4142_AD48A94F87E0, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 10,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 66,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "22px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_017EC629_1BF9_99C0_417B_0953E07A0303",
 "backgroundOpacity": 0,
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "62.667%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Otama.ep';\">Menu</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0636FEF7_1BC8_6640_41BA_3F749B7346A8",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "8.579%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container335828"
 },
 "gap": 10,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_017EA629_1BF9_99C0_4183_882FFD4A83F1",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Button_06AA3710_1BF8_A7C0_41B0_6EB09967E713",
  "this.Button_068EA487_1BC8_9ACF_4195_433EC27AFCB5",
  "this.Button_06039DD2_1BC9_EA40_41B2_99969E85278B"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "25.676%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "gap": 20,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_04418F29_1BD8_67C0_41B9_1F425DC253A2",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Button_04D3BCA3_1BDB_AAC0_41A4_0865FE0736B9",
  "this.Button_04A5C61E_1BC8_99C0_4160_8AF85F675427",
  "this.Button_05EDE1F2_1BD9_9A40_41A3_A3BD4D225448"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "24.595%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container343735"
 },
 "gap": 20,
 "minWidth": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_056A6CE0_1BD9_EA41_41B8_662354D1BA04",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "children": [
  "this.Button_05020C93_1BD9_EAC0_41B5_9BAD44E60357",
  "this.Button_05025C93_1BD9_EAC0_4192_85F5BEBF2A2C"
 ],
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "28.378%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container343735"
 },
 "gap": 20,
 "minWidth": 1
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_06AA3710_1BF8_A7C0_41B0_6EB09967E713",
 "backgroundOpacity": 0.33,
 "shadow": false,
 "width": 220,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "label": "Jaba Sisi Pura",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741, false, 0, this.effect_07516D2E_1B77_1B49_4198_C58BBA8B9D74, 'hideEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "25px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.33,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_068EA487_1BC8_9ACF_4195_433EC27AFCB5",
 "backgroundOpacity": 0.33,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "label": "Jaba Tengah Pura",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741, false, 0, this.effect_0707253B_1B73_0B4F_41A4_42AEE4C730B6, 'hideEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "25px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.33,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_06039DD2_1BC9_EA40_41B2_99969E85278B",
 "backgroundOpacity": 0.33,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "label": "Jeroan",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_01797629_1BF9_99C0_41A6_4356DAD5B741, false, 0, this.effect_06A6BFEC_1B71_36C9_41AE_DCA04785CAAF, 'hideEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "25px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.33,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_04D3BCA3_1BDB_AAC0_41A4_0865FE0736B9",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "3D Pelinggih Nak Lingsir",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_0C2DDD32_19C8_EBC0_4188_ACB701906BFE, true, 0, this.effect_04E99507_1B73_0B47_41B6_ED71CB8BE43C, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "22px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_04A5C61E_1BC8_99C0_4160_8AF85F675427",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "3D Patung Jun Sari",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_00DC0BF2_1B58_AE41_41B3_84E307674714, true, 0, this.effect_0680CB4C_1B71_1FC9_41A4_A9F79140E7DA, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "22px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_05EDE1F2_1BD9_9A40_41A3_A3BD4D225448",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "3D Pelinggih Naga Basuki",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_032A3701_1B5F_E7C3_41AC_140519F0550B, true, 0, this.effect_07E7670B_1B71_774F_41B0_C904B1039B1C, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "20px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_05020C93_1BD9_EAC0_41B5_9BAD44E60357",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "3D Pengubengan",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_0A8EE213_19C8_99C0_41AE_E02524E71AD1, true, 0, this.effect_0675D7CD_1B73_16CB_41BA_C82049C4E7AF, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "25px",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "fontFamily": "Agency FB",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_05025C93_1BD9_EAC0_4192_85F5BEBF2A2C",
 "backgroundOpacity": 0.38,
 "shadow": false,
 "width": 218,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "label": "3D Patung dekat Kori Agung",
 "iconHeight": 0,
 "pressedFontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 10,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "class": "Button",
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0,
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_0066AE9A_1BC8_E6C0_41A1_C0491F4EF140, true, 0, this.effect_05F2DB0C_1B71_3F49_41A8_7F27E00E53F0, 'showEffect', false)",
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 71,
 "rollOverFontColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "fontSize": "20px",
 "paddingLeft": 0,
 "rollOverFontSize": "20px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.38,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "iconWidth": 0,
 "minWidth": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
}],
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "scripts": {
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player795"
 },
 "contentOpaque": false,
 "gap": 10,
 "minWidth": 20,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
