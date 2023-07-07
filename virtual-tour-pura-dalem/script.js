(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.playAudioList([this.audio_0432466F_106A_EB0C_4195_E02AACE1C934]); this.init(); this.playList_210BC039_2C17_43A3_41B1_112468733E2E.set('selectedIndex', 0)",
 "children": [
  "this.MainViewer",
  "this.Container_0CBB2824_1CBE_F838_419A_E68D33B5D1C1",
  "this.HTMLText_11862569_1EB4_1FC3_41B2_2F29A31E2F42",
  "this.MapViewer",
  "this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A",
  "this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554",
  "this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC",
  "this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360",
  "this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872",
  "this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30",
  "this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47",
  "this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435",
  "this.Container_25679BE5_2AFD_08D3_41B8_85321F8F1FE9",
  "this.Container_397135B1_2A25_F8B3_41C4_43A98EE99B7B",
  "this.Container_3F1A5AB5_2A25_08B3_41BD_4A801D76AD10",
  "this.Container_3915EC59_2A23_0FF3_41B3_5C5A5DD2550A",
  "this.Container_39205360_2A23_19D0_41C2_9FD6841A554A",
  "this.Container_3F55B062_2A23_37D0_41C2_AA5B8C845BAA",
  "this.Container_3F354649_2A23_1BD0_41B0_B071207B5256",
  "this.Container_39375D1A_2A23_0970_41C5_5691CCF66CEF",
  "this.Container_3E890E2D_2A23_0B53_41C2_324B096A9FE2",
  "this.Container_393EF2CC_2A23_18D1_41A7_B03B71E1D4FF",
  "this.Container_39398202_2A25_3B50_41C3_FEC2A6C7529B",
  "this.Container_3E26040B_2A23_1F57_41A4_F27CCFDADE3C",
  "this.Container_3E877D07_2A2D_095F_41BA_352EA3835BEB"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21A420CB_2C17_44E7_41B5_5AF7F85805CF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_2163D099_2C17_4363_4175_7968D24D211D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0B381D1F_10EB_D9B6_41AF_4177046F8BEA",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3C65BB0D_2BE7_0953_41B2_D2D52BE0C620",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0668E014_1FB4_1541_41B8_90F2D5C8B7DC",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_04F49D2D_1FDC_2F43_41B8_7336735597E4",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_E341A673_FB4E_36F1_41EE_09F46062F2A4",
  "this.overlay_E04A47C4_FAC6_F610_41D8_E351D75B9B1C",
  "this.overlay_E32A0534_FF5E_0A77_41EF_89ED377B07D1"
 ],
 "hfovMin": "135%",
 "label": "Luar Selatan (Dekat Setra)",
 "id": "panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 667.56,
   "angle": 181.96,
   "y": 479.64,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.02,
   "yaw": -169.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21591069_2C17_43A3_41C4_ACD06FA5B389",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3249AC6C_2A1F_0FD1_41C4_CDE861F82310",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0B3D084C_10EC_A79A_4149_B5FF8B20615C",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0D69D058_10ED_A7B9_41A2_EF3EFE6387C0",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0CD1421A_10E5_ABBE_41B0_0E86E84F25B0",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0E7653D7_10E4_E8B7_41AE_D1C8ED21895C",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0DB3E8EB_10EC_F89E_41AA_CC625D8F6787",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0CD51685_10E4_A88B_419A_0B9591F13F2F",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_055ADE94_1FAC_2D40_418E_E4CB3F24276A",
 "class": "FadeInEffect"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveDown": [
  "this.IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC",
  "this.IconButton_075D9281_10AD_E88A_419F_AF835283991F",
  "this.IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB",
  "this.IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E",
  "this.IconButton_07915013_10A5_E78E_4186_E3A6412B56C7",
  "this.IconButton_06891529_10A4_699A_41A1_18067A241606",
  "this.IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F",
  "this.IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE",
  "this.IconButton_079873CF_10A4_6896_41A1_415DC49EF97E"
 ],
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_04F5F9D1_1FD4_76C3_41AB_10539A0D8E94",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_218150B2_2C17_44A1_41BE_5F419A772CF7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_03E63652_1FD4_1DC1_4195_5F584E8A871B",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3DDB7635_2A1D_1BB0_417C_04E1D6D1401B",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_E8FCBC61_FAC3_FA10_41E6_3D0A4582A9D1",
  "this.overlay_EC6F68DE_FB42_7A33_41EF_24EC870C19FB",
  "this.overlay_E28C3B17_FB4E_1E31_41E3_9468956022E1",
  "this.overlay_E1C7B0E5_FAC2_0A10_41D3_2D928EC4B030",
  "this.overlay_0B333DD5_1F6C_6EC3_41A2_780AFDC99C4E",
  "this.overlay_0B969DD8_1F6C_2EC1_41B5_D15133805801"
 ],
 "hfovMin": "135%",
 "label": "Candi Bentar",
 "id": "panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 618.56,
   "angle": 265.79,
   "y": 265.16,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.82,
   "yaw": -175.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4"
  },
  {
   "backwardYaw": -94.1,
   "yaw": 1.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F"
  },
  {
   "backwardYaw": 91.87,
   "yaw": 3.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_219000A5_2C17_44A3_41BF_A674FFC2AA74",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0DE5AB87_10EC_B897_4195_FCDD7D86A526",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_221F1135_2C17_45A0_41C0_5A675CF306A2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "fieldOfViewOverlayInsideColor": "#0099CC",
 "label": "denah-pura-dalem-buwit",
 "id": "map_3127391D_2BE5_0970_41B7_4C725B527CEB",
 "overlays": [
  "this.overlay_3C1CAA85_2BE3_0B53_41A2_F57B386BBCB3",
  "this.overlay_3D3112AC_2BEC_FB50_41C0_60FAEB6E338E",
  "this.overlay_3D1ABDAD_2BE3_0953_41BC_A198754E72BF",
  "this.overlay_3D365897_2BE3_777F_4185_8D3186263954",
  "this.overlay_3210AB07_2BE3_0950_41C2_13CA291D33A8",
  "this.overlay_32C0B64A_2BE3_1BD0_41C3_98A1CE9AF077",
  "this.overlay_32987457_2BE3_1FFF_4192_26D4378677FD",
  "this.overlay_324AF137_2BE3_79BF_41B7_355C883EBBFB",
  "this.overlay_338ACF16_2BE3_0970_4197_15C9D04C73AD"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.17,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB.png",
    "width": 842,
    "class": "ImageResourceLevel",
    "height": 595
   },
   {
    "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_lq.png",
    "width": 304,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 215
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "width": 842,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "class": "Map",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_t.png",
 "height": 595
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_06153393_1FD4_1B47_418E_BDF3AF9DCAB3",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21B7C0BE_2C17_44A1_41C3_A7126282BBB1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.26,
  "class": "PanoramaCameraPosition",
  "pitch": -2.64
 }
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3F02D59D_2A1F_3973_41A4_9943B342021F",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.75,
  "class": "PanoramaCameraPosition",
  "pitch": 3.3
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21C890F1_2C17_44A3_419D_F2E6A8FD7E6C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_04F1828C_1FD4_1541_41A6_701F6C6BA119",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3DC9AA1D_2A1D_0B70_41C0_EB7DDAC4ECB6",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21EEC11E_2C17_4560_41C5_46A5940BE488",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_32BF722C_2BE3_FB51_41C0_D5EC85A21E94",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_04FE4F27_1FDC_2B4F_41B4_1F4DCBE5A28F",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_32BA1BEA_2A1F_08D1_41A4_9472CDC28DAD",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_2256F188_2C17_4561_41B2_CD3818173A19",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_22204176_2C17_45A1_41C2_95C4B6E131B7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21DA40E4_2C17_44A1_41B4_407B7D47713D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  "this.PanoramaPlayListItem_2134C03D_2C17_43A3_41B7_80E36E1C9563",
  "this.PanoramaPlayListItem_2137203E_2C17_43A1_41C0_54DB65E3D5DC",
  "this.PanoramaPlayListItem_2136503F_2C17_439F_41B1_A70FD25E6614",
  "this.PanoramaPlayListItem_2136303F_2C17_439F_41B1_DBCA1C1C5A6C",
  "this.PanoramaPlayListItem_2131403F_2C17_439F_41A2_CA2BFB6DC1BB",
  "this.PanoramaPlayListItem_2131D03F_2C17_439F_41B0_338DD4CD32E6",
  "this.PanoramaPlayListItem_21301040_2C17_43E1_41B8_0042061BC889",
  "this.PanoramaPlayListItem_21314041_2C17_43E3_41B7_FA55B7E36049",
  "this.PanoramaPlayListItem_2131C041_2C17_43E3_41AD_D8D8BA59A0E4"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_EEF38B99_FB42_1E31_41CE_0D8F28B1B605",
  "this.overlay_EE72C4F1_FB42_0BF1_41DB_783A4A79A52C",
  "this.overlay_E3519737_FB4E_1670_41CD_BCF3DC5F2F2B"
 ],
 "hfovMin": "135%",
 "label": "Depan Prajapati",
 "id": "panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 513.09,
   "angle": 0,
   "y": 252.97,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -174.1,
   "yaw": -4.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F"
  },
  {
   "backwardYaw": 175.43,
   "yaw": 176.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_t.jpg"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3A400D02_2AF8_FEFD_419D_1970773C0D4C",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_E27EF24A_FB46_0E10_41ED_BD7A3E3E7FA3",
  "this.overlay_E32E227E_FB46_0EF0_41EA_08C6809A2EEB",
  "this.overlay_E233FBF3_FB4F_FDF1_41E7_D9CA6B05C976",
  "this.overlay_E26C479B_FB42_7630_41EA_430892EAB472",
  "this.overlay_E12506CD_FAC2_1610_41CF_7388CA9ACE03"
 ],
 "hfovMin": "135%",
 "label": "Jaba Sisi 1",
 "id": "panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 514.64,
   "angle": 182.71,
   "y": 328.63,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.75,
   "yaw": 175.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13"
  },
  {
   "backwardYaw": 1.84,
   "yaw": -94.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72"
  },
  {
   "backwardYaw": 91.72,
   "yaw": 91.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_t.jpg"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3C4A345F_2BE5_1FF0_41C0_942B1E8C8149",
 "class": "FadeInEffect"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_210BC039_2C17_43A3_41B1_112468733E2E",
 "class": "PlayList"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_33460530_2BE3_19B0_4188_254256A5E9C2",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_049FAA96_1FD4_1541_41A3_3F738E47771F",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3D636B2E_2BE7_0951_41C0_29B6360FAD8A",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_ED9ED34D_FB7E_0E11_41D3_80F3E5620BD8",
  "this.overlay_ED3F87F3_FB42_15F1_41E5_117BC0BD59EB",
  "this.overlay_E3CB14B4_FB42_0A70_41E1_708CD8DF24BA",
  "this.overlay_E197CD67_FB4E_3A10_41BA_76466D4A02BD",
  "this.overlay_E0CFC608_FF5E_3610_41D7_88CA51EA6B9C",
  "this.overlay_E35D7074_FF5E_0AF7_41E2_C070A2743AFD",
  "this.overlay_E34834D1_FF5E_0A30_41D6_9EF95639ECEE",
  "this.overlay_E33E2C80_FF42_1A10_41DF_274A9A3DFE58"
 ],
 "hfovMin": "135%",
 "label": "Depan Kori Agung",
 "id": "panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 267.32,
   "angle": 0,
   "y": 328.63,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.3,
   "yaw": 91.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72"
  },
  {
   "backwardYaw": 91.57,
   "yaw": 91.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F"
  },
  {
   "backwardYaw": 81.01,
   "yaw": 2.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_t.jpg"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_08A66D80_10A4_7889_4185_70F383766220",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_EE6CC12C_FB5E_0A17_41D6_3A0EACE9EAEE",
  "this.overlay_E36C8D4B_FB4E_7A10_41B5_72B9B9AFA59E",
  "this.overlay_E095066A_FF42_1610_41EF_3B285B7FEAF9"
 ],
 "hfovMin": "135%",
 "label": "Pelinggih Prajapati",
 "id": "panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 511.55,
   "angle": 15.38,
   "y": 175.61,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.21,
   "yaw": -174.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_t.jpg"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_050C7058_1FAC_15C1_41BD_E6BD393ABE18",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3C86E35E_2A1D_19F1_41B3_6258EC101922",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_2233415E_2C17_45E1_41BC_2147155321AE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_214F907B_2C17_43A7_418C_10BA2A17741A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_210B0039_2C17_43A3_41C0_DCE73F6BA014",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_217CC08B_2C17_4367_41BB_9FEA4E1395E3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_3BC99604_2AF9_2B05_41C2_ECBAD644875A",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21F99107_2C17_4560_41AB_1E80DE83C8EF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_05026997_1FAC_374F_41BB_E1A57F933849",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_320108FC_2BE5_08B0_41AB_43EB76EFB7DA",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0CF0D034_10ED_A78A_41A1_FB4C20470BA4",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_21D530D7_2C17_44EF_41B5_5E2DA3637234",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_0C573B3C_10E4_59FA_40F1_C6862CD8A380",
 "class": "FadeOutEffect"
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_036B1FB3_1FDC_6B47_41B2_FF4D6EEBB4BE",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "audio": {
  "mp3Url": "media/audio_0432466F_106A_EB0C_4195_E02AACE1C934.mp3",
  "oggUrl": "media/audio_0432466F_106A_EB0C_4195_E02AACE1C934.ogg",
  "class": "AudioResource"
 },
 "data": {
  "label": "Pura Dalem Mengwitani"
 },
 "id": "audio_0432466F_106A_EB0C_4195_E02AACE1C934",
 "class": "MediaAudio",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 0,
 "id": "camera_220C5146_2C17_45E0_41C1_7115D0046BE8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "easing": "linear",
 "id": "effect_064473A9_1FAC_3B43_41AD_46A1B1BB0357",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_E366BD2F_FB42_1A10_41E0_B8BC05160BAF",
  "this.overlay_E35DD9CB_FB4E_3A11_41E6_7E1612B57C09",
  "this.overlay_E0E30A9F_FF42_1E30_41EA_57872D018E8C",
  "this.overlay_E322FBB6_FF42_7E70_41C4_95580712C93F",
  "this.overlay_E32B1E08_FF42_761F_41D7_394BA36F4D99",
  "this.overlay_E269DD25_FF43_FA11_41DD_9E274839C298",
  "this.overlay_E0D5EEBA_FF42_F673_41D2_74C868653BCE",
  "this.overlay_E37004EE_FF42_0A10_41EE_BCCDB98374CE",
  "this.overlay_E3607FAF_FF42_3611_41EA_BB4D8DB155F9",
  "this.overlay_0BEBE674_1F6C_1DC1_41A4_30BE63CE653B",
  "this.overlay_0A38185B_1F6C_15C7_41AA_A520015636AD",
  "this.overlay_0AED093E_1F6C_3741_4167_A7A4EE220CA6",
  "this.overlay_087C1868_1F6C_75C1_41AA_034662446A4E"
 ],
 "hfovMin": "135%",
 "label": "Jeroan",
 "id": "panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 267.32,
   "angle": 89.18,
   "y": 185.54,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.41,
   "yaw": 81.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_E3558FB2_FB4E_3670_41D9_86F4C88C4267",
  "this.overlay_E18CF2C9_FAC6_0E10_4190_C3C36CE6FE9F"
 ],
 "hfovMin": "135%",
 "label": "Luar Utara",
 "id": "panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 669.1,
   "angle": 0,
   "y": 156.46,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.59,
   "yaw": 169.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_E3568F18_FB4E_1630_41E8_3E81A16D9EAE",
  "this.overlay_E0BC32B4_FAC6_0E77_41D1_EAF77AAB488E",
  "this.overlay_E6CB0CC4_FAC7_FA10_41E9_0F6B414258D4",
  "this.overlay_E0BB9BB1_FAC6_3E70_41D5_E55EBF84A81C"
 ],
 "hfovMin": "135%",
 "label": "Depan Pura",
 "id": "panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
 "hfov": 360,
 "mapLocations": [
  {
   "map": "this.map_3127391D_2BE5_0970_41B7_4C725B527CEB",
   "x": 669.87,
   "angle": 0,
   "y": 264.44,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "backwardYaw": 169.98,
   "yaw": 3.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919"
  },
  {
   "backwardYaw": -169.07,
   "yaw": 177.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5"
  },
  {
   "backwardYaw": -175.02,
   "yaw": -95.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_t.jpg"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45",
  "this.IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C",
  "this.IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1"
 ],
 "id": "Container_0CBB2824_1CBE_F838_419A_E68D33B5D1C1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "20.833%",
 "borderRadius": 0,
 "right": "0%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container4398"
 },
 "height": "13.93%"
},
{
 "maxHeight": 512,
 "height": "20.73%",
 "id": "HTMLText_11862569_1EB4_1FC3_41B2_2F29A31E2F42",
 "left": "0.09%",
 "backgroundOpacity": 0,
 "paddingLeft": 20,
 "paddingRight": 10,
 "width": "52.717%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 1,
 "borderSize": 3,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:26px;font-family:'Bali Simbar-B';\"><B>purd2m/kel(k)lkhn\u00d0jed]\u00c1dt/buwit/.</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:19px;font-family:'Product Sans';\"><B>Pura Dalem Kaler Kelakahan Kaja, Desa Adat Buwit</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 20,
 "data": {
  "name": "HTMLText1580"
 },
 "maxWidth": 1270
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "right": "0%",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "30.072%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "32.338%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "MapViewer"
 }
},
{
 "children": [
  "this.Container_054C66D4_10AD_A88A_4190_8C0F13AC0A46"
 ],
 "id": "Container_054CB6D4_10AD_A88A_4180_E524EE63996A",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_073A371B_1F54_1B47_4181_A4F322A415E3",
  "this.Container_073BE71B_1F54_1B47_41BB_B656FFF33D2B"
 ],
 "id": "Container_073BA71B_1F54_1B47_41AD_98F23ED5E554",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "LIST 3D"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_0BA659B1_1F7C_1743_41A5_6CEAAB61CBCC",
  "this.Container_0BA679B1_1F7C_1743_41B4_87223E27FADD"
 ],
 "id": "Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "3D B KIRI"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_0BBAED60_1F7F_EFC1_4172_51E05C9A8F44",
  "this.Container_0BBACD60_1F7F_EFC1_4171_1292A9C4ADEC"
 ],
 "id": "Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "3D B KANAN"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_096B72AF_1F7C_155F_4194_D952AED2310E",
  "this.Container_096B92AF_1F7C_155F_41B2_C6F52698CE89"
 ],
 "id": "Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "3D BD KIRI"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_0BFB4AC0_1F7B_EAC1_41A6_CACCD791FE86",
  "this.Container_0BFB2AC0_1F7B_EAC1_4121_7BB2E6AD5B00"
 ],
 "id": "Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "3D BD KANAN"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_0BD076F6_1F74_3AC1_41B8_26661AFBD742",
  "this.Container_0BD096F6_1F74_3AC1_41B9_17EF41F02935"
 ],
 "id": "Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "3D BDX KIRI"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_0BF79C98_1F74_6D41_4185_BA5431802D15",
  "this.Container_0BF7FC98_1F74_6D41_41B6_A53D8553BE39"
 ],
 "id": "Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "3D BDX KANAN"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2567EBE5_2AFD_08D3_41C3_1893091B54F9",
  "this.Container_2567CBE5_2AFD_08D3_41C1_4C235B2E069D"
 ],
 "id": "Container_25679BE5_2AFD_08D3_41B8_85321F8F1FE9",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_25679BE5_2AFD_08D3_41B8_85321F8F1FE9, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "kulkul"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3971F5B1_2A25_F8B3_41C1_4961CDAB8DF3",
  "this.Container_397115B1_2A25_F8B3_41B9_6112D4B988B7"
 ],
 "id": "Container_397135B1_2A25_F8B3_41C4_43A98EE99B7B",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_397135B1_2A25_F8B3_41C4_43A98EE99B7B, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "gong"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3F1AEAB5_2A25_08B3_4192_D1E59572D7DB",
  "this.Container_3F1A0AB5_2A25_08B3_41BC_16D6F16E9E77"
 ],
 "id": "Container_3F1A5AB5_2A25_08B3_41BD_4A801D76AD10",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3F1A5AB5_2A25_08B3_41BD_4A801D76AD10, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "pasane"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39152C59_2A23_0FF3_41C1_DA8F18F3BF4F",
  "this.Container_3915CC59_2A23_0FF3_41C3_D29DA409BFDC"
 ],
 "id": "Container_3915EC59_2A23_0FF3_41B3_5C5A5DD2550A",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3915EC59_2A23_0FF3_41B3_5C5A5DD2550A, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "kagung"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39219360_2A23_19D0_41B6_135B41C012FC",
  "this.Container_39207360_2A23_19D0_418B_A07EA445419A"
 ],
 "id": "Container_39205360_2A23_19D0_41C2_9FD6841A554A",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39205360_2A23_19D0_41C2_9FD6841A554A, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "ratu nyoman"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3F567062_2A23_37D0_41B3_88EEFA2400CE",
  "this.Container_3F565062_2A23_37D0_41B1_1EAADD51C851"
 ],
 "id": "Container_3F55B062_2A23_37D0_41C2_AA5B8C845BAA",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3F55B062_2A23_37D0_41C2_AA5B8C845BAA, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "pagedong"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3F351648_2A23_1BD0_41A1_020EFB9781E3",
  "this.Container_3F357649_2A23_1BD0_41C4_2A963F12E344"
 ],
 "id": "Container_3F354649_2A23_1BD0_41B0_B071207B5256",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3F354649_2A23_1BD0_41B0_B071207B5256, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "pewareg"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39379D1A_2A23_0970_41C3_025CA2CF75F6",
  "this.Container_3937BD1A_2A23_0970_41C3_DA68CB82AC4D"
 ],
 "id": "Container_39375D1A_2A23_0970_41C5_5691CCF66CEF",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39375D1A_2A23_0970_41C5_5691CCF66CEF, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "pemujan"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3E894E2D_2A23_0B53_41BD_7556868D485E",
  "this.Container_3E896E2D_2A23_0B53_41AA_6399232A8FD0"
 ],
 "id": "Container_3E890E2D_2A23_0B53_41C2_324B096A9FE2",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3E890E2D_2A23_0B53_41C2_324B096A9FE2, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "praja"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_393F32CC_2A23_18D1_41B1_0B706CA42CAC",
  "this.Container_393F12CC_2A23_18D1_416C_6DF16EE3E032"
 ],
 "id": "Container_393EF2CC_2A23_18D1_41A7_B03B71E1D4FF",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_393EF2CC_2A23_18D1_41A7_B03B71E1D4FF, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "ayumas"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39394202_2A25_3B50_4198_56EDE536D2E2",
  "this.Container_3939A202_2A25_3B50_41C4_22EF318E576E"
 ],
 "id": "Container_39398202_2A25_3B50_41C3_FEC2A6C7529B",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39398202_2A25_3B50_41C3_FEC2A6C7529B, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "sakapat"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3E26C40B_2A23_1F57_41C2_643581053F90",
  "this.Container_3E26240B_2A23_1F57_41C5_3E49FBA0C63B"
 ],
 "id": "Container_3E26040B_2A23_1F57_41A4_F27CCFDADE3C",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3E26040B_2A23_1F57_41A4_F27CCFDADE3C, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "sema"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_3E873D07_2A2D_095F_4186_ADE6EF9E5749",
  "this.Container_3E871D07_2A2D_095F_41BF_5DFD7D00941F"
 ],
 "id": "Container_3E877D07_2A2D_095F_41BA_352EA3835BEB",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_3E877D07_2A2D_095F_41BA_352EA3835BEB, false, 0, null, null, false)",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "ratu made"
 },
 "scrollBarOpacity": 0.5
},
{
 "bleachingDistance": 0.4,
 "yaw": -162,
 "pitch": 38.86,
 "bleaching": 0.7,
 "id": "overlay_E341A673_FB4E_36F1_41EE_09F46062F2A4",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4, this.camera_221F1135_2C17_45A0_41C0_5A675CF306A2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF352BA1_FF4E_1E11_41C6_734AC9B62089",
   "yaw": -169.07,
   "pitch": -10.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.85
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.85,
   "yaw": -169.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.37
  }
 ],
 "id": "overlay_E04A47C4_FAC6_F610_41D8_E351D75B9B1C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3E26040B_2A23_1F57_41A4_F27CCFDADE3C, true, 0, this.effect_3C86E35E_2A1D_19F1_41B3_6258EC101922, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF357BA1_FF4E_1E11_41E5_480D5D888468",
   "yaw": 68.39,
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 68.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.75
  }
 ],
 "id": "overlay_E32A0534_FF5E_0A77_41EF_89ED377B07D1",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "id": "IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC",
 "left": "32.07%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "top": "30.6%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0E7653D7_10E4_E8B7_41AE_D1C8ED21895C, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_075D9281_10AD_E88A_419F_AF835283991F",
 "left": "31.93%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "39.45%",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0CD1421A_10E5_ABBE_41B0_0E86E84F25B0, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_075D9281_10AD_E88A_419F_AF835283991F.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "36.68%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "39.45%",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0CD51685_10E4_A88B_419A_0B9591F13F2F, 'hideEffect', false); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0DB3E8EB_10EC_F89E_41AA_CC625D8F6787, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "19.47%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "top": "46.42%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0D69D058_10ED_A7B9_41A2_EF3EFE6387C0, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_07915013_10A5_E78E_4186_E3A6412B56C7",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "19.23%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "10.22%",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0B3D084C_10EC_A79A_4149_B5FF8B20615C, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_07915013_10A5_E78E_4186_E3A6412B56C7.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_06891529_10A4_699A_41A1_18067A241606",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "19.35%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "top": "33.04%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0DE5AB87_10EC_B897_4195_FCDD7D86A526, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_06891529_10A4_699A_41A1_18067A241606.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "36.53%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "top": "42.21%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0B381D1F_10EB_D9B6_41AF_4177046F8BEA, 'hideEffect', false)",
 "class": "IconButton",
 "height": 34,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE",
 "backgroundOpacity": 0,
 "width": 33.1,
 "paddingRight": 0,
 "right": "25.15%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "top": "46.42%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0CF0D034_10ED_A78A_41A1_FB4C20470BA4, 'hideEffect', false)",
 "class": "IconButton",
 "height": 31,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "id": "IconButton_079873CF_10A4_6896_41A1_415DC49EF97E",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingRight": 0,
 "right": "36.28%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "top": "29.59%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, this.effect_0C573B3C_10E4_59FA_40F1_C6862CD8A380, 'hideEffect', false)",
 "class": "IconButton",
 "height": 32,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_079873CF_10A4_6896_41A1_415DC49EF97E.png",
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4, this.camera_217CC08B_2C17_4367_41BB_9FEA4E1395E3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E3D0437D_FB46_0EF0_41E9_9C3BF7D60235",
   "yaw": -175.02,
   "pitch": -26.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.21
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.21,
   "yaw": -175.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.98
  }
 ],
 "id": "overlay_E8FCBC61_FAC3_FA10_41E6_3D0A4582A9D1",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03, this.camera_219000A5_2C17_44A3_41BF_A674FFC2AA74); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E1FFF34A_FAC6_0E13_41B9_480D97C451E8",
   "yaw": 3.3,
   "pitch": -9.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 3.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.19
  }
 ],
 "id": "overlay_EC6F68DE_FB42_7A33_41EF_24EC870C19FB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 112.09,
 "pitch": 51.14,
 "bleaching": 0.7,
 "id": "overlay_E28C3B17_FB4E_1E31_41E3_9468956022E1",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F, this.camera_2163D099_2C17_4363_4175_7968D24D211D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E6287A68_FAC2_1E1F_41C9_855D9FB56409",
   "yaw": 1.84,
   "pitch": -21.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.07
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.07,
   "yaw": 1.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.46
  }
 ],
 "id": "overlay_E1C7B0E5_FAC2_0A10_41D3_2D928EC4B030",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, true, 0, this.effect_06153393_1FD4_1B47_418E_BDF3AF9DCAB3, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_6_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -23.9,
   "yaw": -122.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.08,
   "yaw": -122.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.9
  }
 ],
 "id": "overlay_0B333DD5_1F6C_6EC3_41A2_780AFDC99C4E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, true, 0, this.effect_03E63652_1FD4_1DC1_4195_5F584E8A871B, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_7_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -23.9,
   "yaw": 117.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.08,
   "yaw": 117.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.9
  }
 ],
 "id": "overlay_0B969DD8_1F6C_2EC1_41B5_D15133805801",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 502.04,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 307.23,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 501.94,
  "class": "HotspotMapOverlayImage",
  "y": 306.97,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_0.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_3C1CAA85_2BE3_0B53_41A2_F57B386BBCB3",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 254.73,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 307.23,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 254.62,
  "class": "HotspotMapOverlayImage",
  "y": 306.97,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_1.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_3D3112AC_2BEC_FB50_41C0_60FAEB6E338E",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 254.73,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 164.09,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 254.62,
  "class": "HotspotMapOverlayImage",
  "y": 163.88,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_2.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_3D1ABDAD_2BE3_0953_41BC_A198754E72BF",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 500.5,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 231.51,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 500.4,
  "class": "HotspotMapOverlayImage",
  "y": 231.31,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_3.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_3D365897_2BE3_777F_4185_8D3186263954",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 606.07,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 243.71,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 605.86,
  "class": "HotspotMapOverlayImage",
  "y": 243.51,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_4.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_3210AB07_2BE3_0950_41C2_13CA291D33A8",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 657.38,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 242.99,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 657.18,
  "class": "HotspotMapOverlayImage",
  "y": 242.79,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_5.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_32C0B64A_2BE3_1BD0_41C3_98A1CE9AF077",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 656.61,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 135.01,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 656.4,
  "class": "HotspotMapOverlayImage",
  "y": 134.8,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_6.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_32987457_2BE3_1FFF_4192_26D4378677FD",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 655.07,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 458.09,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 654.86,
  "class": "HotspotMapOverlayImage",
  "y": 457.99,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_7.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_324AF137_2BE3_79BF_41B7_355C883EBBFB",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 25.39,
  "x": 498.96,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_8_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 27
    }
   ]
  },
  "y": 154.1,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 43.32,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 498.85,
  "class": "HotspotMapOverlayImage",
  "y": 153.95,
  "width": 25.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_3127391D_2BE5_0970_41B7_4C725B527CEB_HS_8.png",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 43
    }
   ]
  },
  "height": 43.32
 },
 "useHandCursor": true,
 "id": "overlay_338ACF16_2BE3_0970_4197_15C9D04C73AD",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "camera": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_camera",
 "media": "this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2134C03D_2C17_43A3_41B7_80E36E1C9563, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2134C03D_2C17_43A3_41B7_80E36E1C9563",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_camera",
 "media": "this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2137203E_2C17_43A1_41C0_54DB65E3D5DC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2137203E_2C17_43A1_41C0_54DB65E3D5DC",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_camera",
 "media": "this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2136503F_2C17_439F_41B1_A70FD25E6614, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2136503F_2C17_439F_41B1_A70FD25E6614",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_camera",
 "media": "this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2136303F_2C17_439F_41B1_DBCA1C1C5A6C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2136303F_2C17_439F_41B1_DBCA1C1C5A6C",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_camera",
 "media": "this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2131403F_2C17_439F_41A2_CA2BFB6DC1BB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2131403F_2C17_439F_41A2_CA2BFB6DC1BB",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_camera",
 "media": "this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2131D03F_2C17_439F_41B0_338DD4CD32E6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2131D03F_2C17_439F_41B0_338DD4CD32E6",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_camera",
 "media": "this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_21301040_2C17_43E1_41B8_0042061BC889, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_21301040_2C17_43E1_41B8_0042061BC889",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_camera",
 "media": "this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_21314041_2C17_43E3_41B7_FA55B7E36049, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_21314041_2C17_43E3_41B7_FA55B7E36049",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_camera",
 "media": "this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2131C041_2C17_43E3_41AD_D8D8BA59A0E4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2131C041_2C17_43E3_41AD_D8D8BA59A0E4",
 "class": "PanoramaPlayListItem"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F, this.camera_21D530D7_2C17_44EF_41B5_5E2DA3637234); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_EDDBADF8_FB5E_35F0_41D0_29F5028ADDF0",
   "yaw": -4.21,
   "pitch": -21.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.75
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.75,
   "yaw": -4.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ],
 "id": "overlay_EEF38B99_FB42_1E31_41CE_0D8F28B1B605",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F, this.camera_21DA40E4_2C17_44A1_41B4_407B7D47713D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E705E4BB_FB42_0A70_41D6_83CA26DF9017",
   "yaw": 176.75,
   "pitch": -13.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.51
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.51,
   "yaw": 176.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.68
  }
 ],
 "id": "overlay_EE72C4F1_FB42_0BF1_41DB_783A4A79A52C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 6.95,
 "pitch": 45.41,
 "bleaching": 0.7,
 "id": "overlay_E3519737_FB4E_1670_41CD_BCF3DC5F2F2B",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03, this.camera_22204176_2C17_45A1_41C2_95C4B6E131B7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E0174336_FB42_0E70_41D9_D2F28C0D7B19",
   "yaw": 91.57,
   "pitch": -12.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.39
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.39,
   "yaw": 91.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.49
  }
 ],
 "id": "overlay_E27EF24A_FB46_0E10_41ED_BD7A3E3E7FA3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13, this.camera_220C5146_2C17_45E0_41C1_7115D0046BE8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E6D9C35D_FB42_0E31_41EC_A3FAFD82707F",
   "yaw": 175.43,
   "pitch": -14.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.88
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.88,
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.29
  }
 ],
 "id": "overlay_E32E227E_FB46_0EF0_41EA_08C6809A2EEB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -160.77,
 "pitch": 53.59,
 "bleaching": 0.7,
 "id": "overlay_E233FBF3_FB4F_FDF1_41E7_D9CA6B05C976",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_25679BE5_2AFD_08D3_41B8_85321F8F1FE9, true, 0, this.effect_3DC9AA1D_2A1D_0B70_41C0_EB7DDAC4ECB6, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E7F47B09_FB42_3E10_41C9_7DEA93FCE687",
   "yaw": -24.24,
   "pitch": -3.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.41
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -24.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.87
  }
 ],
 "id": "overlay_E26C479B_FB42_7630_41EA_430892EAB472",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72, this.camera_2233415E_2C17_45E1_41BC_2147155321AE); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E629FA69_FAC2_1E11_41DA_8CDF32C06FB0",
   "yaw": -94.1,
   "pitch": -20.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.34
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.34,
   "yaw": -94.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.41
  }
 ],
 "id": "overlay_E12506CD_FAC2_1610_41CF_7388CA9ACE03",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F, this.camera_21B7C0BE_2C17_44A1_41C3_A7126282BBB1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E6299A69_FAC2_1E11_41EA_F89BCA926187",
   "yaw": 91.72,
   "pitch": -14.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.88
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 91.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.4
  }
 ],
 "id": "overlay_ED9ED34D_FB7E_0E11_41D3_80F3E5620BD8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4, this.camera_21A420CB_2C17_44E7_41B5_5AF7F85805CF); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E1382648_FB42_3610_41CF_6A7024CB68E3",
   "yaw": 2.41,
   "pitch": -17.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.08
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.08,
   "yaw": 2.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.1
  }
 ],
 "id": "overlay_ED3F87F3_FB42_15F1_41E5_117BC0BD59EB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72, this.camera_218150B2_2C17_44A1_41BE_5F419A772CF7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E101741C_FB4E_0A30_41E9_97E039338E99",
   "yaw": 91.87,
   "pitch": -5.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.96
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.96,
   "yaw": 91.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_5_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.24
  }
 ],
 "id": "overlay_E3CB14B4_FB42_0A70_41E1_708CD8DF24BA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.36,
 "yaw": 9.41,
 "pitch": 47.45,
 "bleaching": 0.34,
 "id": "overlay_E197CD67_FB4E_3A10_41BA_76466D4A02BD",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3F354649_2A23_1BD0_41B0_B071207B5256, true, 0, this.effect_3249AC6C_2A1F_0FD1_41C4_CDE861F82310, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF303BA1_FF4E_1E11_41EE_84DB44949658",
   "yaw": -147.13,
   "pitch": -0.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -147.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.85
  }
 ],
 "id": "overlay_E0CFC608_FF5E_3610_41D7_88CA51EA6B9C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3F1A5AB5_2A25_08B3_41BD_4A801D76AD10, true, 0, this.effect_3F02D59D_2A1F_3973_41A4_9943B342021F, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF304BA1_FF4E_1E11_41EA_3D33A354F5F4",
   "yaw": -88.8,
   "pitch": -2.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.06
  }
 ],
 "id": "overlay_E35D7074_FF5E_0AF7_41E2_C070A2743AFD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3915EC59_2A23_0FF3_41B3_5C5A5DD2550A, true, 0, this.effect_32BA1BEA_2A1F_08D1_41A4_9472CDC28DAD, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF308BA1_FF4E_1E11_41E4_96596611F331",
   "yaw": 1.65,
   "pitch": 3.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.88
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": 1.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.16
  }
 ],
 "id": "overlay_E34834D1_FF5E_0A30_41D6_9EF95639ECEE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_397135B1_2A25_F8B3_41C4_43A98EE99B7B, true, 0, this.effect_3DDB7635_2A1D_1BB0_417C_04E1D6D1401B, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF30CBA1_FF4E_1E11_41D1_E1DFCB5BE3B1",
   "yaw": 157.85,
   "pitch": -0.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 157.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.24
  }
 ],
 "id": "overlay_E33E2C80_FF42_1A10_41DF_274A9A3DFE58",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13, this.camera_21591069_2C17_43A3_41C4_ACD06FA5B389); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_EE796367_FB7E_0E10_4188_DB76611B6BC4",
   "yaw": -174.1,
   "pitch": -24.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.71
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.71,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.48
  }
 ],
 "id": "overlay_EE6CC12C_FB5E_0A17_41D6_3A0EACE9EAEE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 18,
 "pitch": 45.41,
 "bleaching": 0.7,
 "id": "overlay_E36C8D4B_FB4E_7A10_41B5_72B9B9AFA59E",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3E890E2D_2A23_0B53_41C2_324B096A9FE2, true, 0, this.effect_3D636B2E_2BE7_0951_41C0_29B6360FAD8A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF3C4BB0_FF4E_1E70_41E2_F83D672F43B7",
   "yaw": 40.72,
   "pitch": -6.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.84
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 40.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.93
  }
 ],
 "id": "overlay_E095066A_FF42_1610_41EF_3B285B7FEAF9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03, this.camera_2256F188_2C17_4561_41B2_CD3818173A19); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E011F337_FB42_0E70_41E4_4AAF89C31ACB",
   "yaw": 81.01,
   "pitch": -15.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.13
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 81.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.86
  }
 ],
 "id": "overlay_E366BD2F_FB42_1A10_41E0_B8BC05160BAF",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -81.82,
 "pitch": 48.27,
 "bleaching": 0.7,
 "id": "overlay_E35DD9CB_FB4E_3A11_41E6_7E1612B57C09",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3F55B062_2A23_37D0_41C2_AA5B8C845BAA, true, 0, this.effect_320108FC_2BE5_08B0_41AB_43EB76EFB7DA, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF31ABA1_FF4E_1E11_41C3_D2518E3D56D7",
   "yaw": 0.58,
   "pitch": 3.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.88
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": 0.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.43
  }
 ],
 "id": "overlay_E0E30A9F_FF42_1E30_41EA_57872D018E8C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3E877D07_2A2D_095F_41BA_352EA3835BEB, true, 0, this.effect_32BF722C_2BE3_FB51_41C0_D5EC85A21E94, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF31EBA1_FF4E_1E11_41E6_79873187A674",
   "yaw": -40.09,
   "pitch": -6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.86
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.86,
   "yaw": -40.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6
  }
 ],
 "id": "overlay_E322FBB6_FF42_7E70_41C4_95580712C93F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_393EF2CC_2A23_18D1_41A7_B03B71E1D4FF, true, 0, this.effect_3BC99604_2AF9_2B05_41C2_ECBAD644875A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF3E3BA1_FF4E_1E11_41E1_02DDAA8E9093",
   "yaw": 40.72,
   "pitch": -6.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.84
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 40.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.93
  }
 ],
 "id": "overlay_E32B1E08_FF42_761F_41D7_394BA36F4D99",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_39205360_2A23_19D0_41C2_9FD6841A554A, true, 0, this.effect_33460530_2BE3_19B0_4188_254256A5E9C2, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF3E5BA1_FF4E_1E11_41DD_81AB74EA9161",
   "yaw": -68.66,
   "pitch": -9.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.8
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": -68.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.19
  }
 ],
 "id": "overlay_E269DD25_FF43_FA11_41DD_9E274839C298",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_39375D1A_2A23_0970_41C5_5691CCF66CEF, true, 0, this.effect_3A400D02_2AF8_FEFD_419D_1970773C0D4C, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF3EBBB0_FF4E_1E70_41E9_CA0AD1973A7F",
   "yaw": -166.48,
   "pitch": -2.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -166.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.41
  }
 ],
 "id": "overlay_E0D5EEBA_FF42_F673_41D2_74C868653BCE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_39398202_2A25_3B50_41C3_FEC2A6C7529B, true, 0, this.effect_3C65BB0D_2BE7_0953_41B2_D2D52BE0C620, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF3EDBB0_FF4E_1E70_41E0_268F8BE126B2",
   "yaw": 148.77,
   "pitch": -4.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.87
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 148.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.67
  }
 ],
 "id": "overlay_E37004EE_FF42_0A10_41EE_BCCDB98374CE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3915EC59_2A23_0FF3_41B3_5C5A5DD2550A, true, 0, this.effect_3C4A345F_2BE5_1FF0_41C0_942B1E8C8149, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DF3F0BB0_FF4E_1E70_41ED_3831F84BB7CF",
   "yaw": 81.92,
   "pitch": 0.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.89
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 81.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.91
  }
 ],
 "id": "overlay_E3607FAF_FF42_3611_41EA_BB4D8DB155F9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, true, 0, this.effect_064473A9_1FAC_3B43_41AD_46A1B1BB0357, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_9_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 6.05,
   "yaw": 21.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 21.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.05
  }
 ],
 "id": "overlay_0BEBE674_1F6C_1DC1_41A4_30BE63CE653B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, true, 0, this.effect_05026997_1FAC_374F_41BB_E1A57F933849, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_10_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 5.67,
   "yaw": -22.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.2,
   "yaw": -22.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.67
  }
 ],
 "id": "overlay_0A38185B_1F6C_15C7_41AA_A520015636AD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, true, 0, this.effect_050C7058_1FAC_15C1_41BD_E6BD393ABE18, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_11_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -11.77,
   "yaw": -40.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.49,
   "yaw": -40.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.77
  }
 ],
 "id": "overlay_0AED093E_1F6C_3741_4167_A7A4EE220CA6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, true, 0, this.effect_055ADE94_1FAC_2D40_418E_E4CB3F24276A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_12_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -9.25,
   "yaw": -48.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -48.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.25
  }
 ],
 "id": "overlay_087C1868_1F6C_75C1_41AA_034662446A4E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -6.55,
 "pitch": 43.36,
 "bleaching": 0.7,
 "id": "overlay_E3558FB2_FB4E_3670_41D9_86F4C88C4267",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4, this.camera_214F907B_2C17_43A7_418C_10BA2A17741A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E1FF6349_FAC6_0E11_41E5_D1431ECAB3F1",
   "yaw": 169.98,
   "pitch": -27.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 17.13
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.13,
   "yaw": 169.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.04
  }
 ],
 "id": "overlay_E18CF2C9_FAC6_0E10_4190_C3C36CE6FE9F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 9.82,
 "pitch": 41.32,
 "bleaching": 0.7,
 "id": "overlay_E3568F18_FB4E_1630_41E8_3E81A16D9EAE",
 "class": "LensFlarePanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919, this.camera_21C890F1_2C17_44A3_419D_F2E6A8FD7E6C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E1F87349_FAC6_0E11_41C5_25EDB7FB7663",
   "yaw": 3.59,
   "pitch": -13.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.02
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.02,
   "yaw": 3.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.53
  }
 ],
 "id": "overlay_E0BC32B4_FAC6_0E77_41D1_EAF77AAB488E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5, this.camera_21F99107_2C17_4560_41AB_1E80DE83C8EF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E1487B03_FAC2_1E11_41EE_4A0098A14815",
   "yaw": 177.02,
   "pitch": -15.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.23
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": 177.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.31
  }
 ],
 "id": "overlay_E6CB0CC4_FAC7_FA10_41E9_0F6B414258D4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72, this.camera_21EEC11E_2C17_4560_41C5_46A5940BE488); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_E1F88349_FAC6_0E11_41EF_03B374BDC704",
   "yaw": -95.82,
   "pitch": -13.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.39
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.39,
   "yaw": -95.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_7_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.04
  }
 ],
 "id": "overlay_E0BB9BB1_FAC6_3E70_41D5_E55EBF84A81C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maxHeight": 101,
 "id": "IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, true, 0, this.effect_08A66D80_10A4_7889_4185_70F383766220, 'showEffect', false)",
 "class": "IconButton",
 "height": 44,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1BF8799A_0FE4_F8BE_41AE_F19CD7BDEF45.png",
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554, true, 0, this.effect_0668E014_1FB4_1541_41B8_90F2D5C8B7DC, 'showEffect', false)",
 "class": "IconButton",
 "height": 44,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1BFA399A_0FE4_F8BE_4194_AA1BF32EC93C.png",
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://goo.gl/maps/eQ5BRnFdEiUnsXzz8', '_blank')",
 "class": "IconButton",
 "height": 44,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1BFA099A_0FE4_F8BE_41A3_9A7801F31EC1.png",
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Container_054C86D4_10AD_A88A_41A3_4251E516367C",
  "this.Image_041D5428_1F74_1D41_4196_D26CA9EE0E20",
  "this.IconButton_06EFCFD0_10AC_D889_4194_BE8B14E203CC",
  "this.IconButton_075D9281_10AD_E88A_419F_AF835283991F",
  "this.IconButton_0659408B_10AC_A89E_41A8_D8B48F10A8CB",
  "this.IconButton_09A6FC55_10AB_DF8B_41AD_74BA465D411E",
  "this.IconButton_07915013_10A5_E78E_4186_E3A6412B56C7",
  "this.IconButton_06891529_10A4_699A_41A1_18067A241606",
  "this.IconButton_084580F5_10A4_A88B_4184_68CDFF96B55F",
  "this.IconButton_08A6B4CE_10DC_6896_41AD_E9DBF006EEEE",
  "this.IconButton_079873CF_10A4_6896_41A1_415DC49EF97E"
 ],
 "id": "Container_054C66D4_10AD_A88A_4190_8C0F13AC0A46",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 10,
 "shadowVerticalLength": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 10,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 10,
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Container_0946C0AF_1FAC_355F_41A3_9C7EF5AF0591",
  "this.Container_08394684_1F54_7D41_418A_72E4D7E0BE17",
  "this.Container_080A242B_1FAC_1D47_41A9_9D741B5AF8D7"
 ],
 "id": "Container_073A371B_1F54_1B47_4181_A4F322A415E3",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED"
 ],
 "id": "Container_073BE71B_1F54_1B47_41BB_B656FFF33D2B",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.WebFrame_0BA669B1_1F7C_1743_41BC_E23F4262DCB8"
 ],
 "id": "Container_0BA659B1_1F7C_1743_41A5_6CEAAB61CBCC",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6"
 ],
 "id": "Container_0BA679B1_1F7C_1743_41B4_87223E27FADD",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.WebFrame_0BBAFD60_1F7F_EFC1_419A_348995F02937"
 ],
 "id": "Container_0BBAED60_1F7F_EFC1_4172_51E05C9A8F44",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17"
 ],
 "id": "Container_0BBACD60_1F7F_EFC1_4171_1292A9C4ADEC",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.WebFrame_096B82AF_1F7C_155F_41AF_158FE7F3476B"
 ],
 "id": "Container_096B72AF_1F7C_155F_4194_D952AED2310E",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA"
 ],
 "id": "Container_096B92AF_1F7C_155F_41B2_C6F52698CE89",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.WebFrame_0BFB3AC0_1F7B_EAC1_41B1_DCCCBBA68E4E"
 ],
 "id": "Container_0BFB4AC0_1F7B_EAC1_41A6_CACCD791FE86",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77"
 ],
 "id": "Container_0BFB2AC0_1F7B_EAC1_4121_7BB2E6AD5B00",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.WebFrame_0BD066F6_1F74_3AC1_41B4_84FB2A581236"
 ],
 "id": "Container_0BD076F6_1F74_3AC1_41B8_26661AFBD742",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58"
 ],
 "id": "Container_0BD096F6_1F74_3AC1_41B9_17EF41F02935",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.WebFrame_0BF78C98_1F74_6D41_41BE_62818EEBC900"
 ],
 "id": "Container_0BF79C98_1F74_6D41_4185_BA5431802D15",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476"
 ],
 "id": "Container_0BF7FC98_1F74_6D41_41B6_A53D8553BE39",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E723788_2A27_1951_41B5_2028F0FC8AC7"
 ],
 "id": "Container_2567EBE5_2AFD_08D3_41C3_1893091B54F9",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_2567ABE5_2AFD_08D3_41AD_4EFBC3C06D23"
 ],
 "id": "Container_2567CBE5_2AFD_08D3_41C1_4C235B2E069D",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3FAF08A9_2A25_3750_41C4_14F5DC0166BA"
 ],
 "id": "Container_3971F5B1_2A25_F8B3_41C1_4961CDAB8DF3",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_397125B1_2A25_F8B3_41BB_CE8A4CAD1373"
 ],
 "id": "Container_397115B1_2A25_F8B3_41B9_6112D4B988B7",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E70AAFC_2A2F_08B0_41BE_0C904D774985"
 ],
 "id": "Container_3F1AEAB5_2A25_08B3_4192_D1E59572D7DB",
 "left": "4.71%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "4.71%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3F1A2AB5_2A25_08B3_41B7_ADB64D939A5F"
 ],
 "id": "Container_3F1A0AB5_2A25_08B3_41BC_16D6F16E9E77",
 "left": "4.71%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "4.71%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3FE67E32_2A25_0BB1_41C1_A19ECBAE6B69"
 ],
 "id": "Container_39152C59_2A23_0FF3_41C1_DA8F18F3BF4F",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3915FC59_2A23_0FF3_41B4_EA52C51EEACC"
 ],
 "id": "Container_3915CC59_2A23_0FF3_41C3_D29DA409BFDC",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3FDA2D8C_2A25_0950_4197_1F2500435BA0"
 ],
 "id": "Container_39219360_2A23_19D0_41B6_135B41C012FC",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_39206360_2A23_19D0_41B5_67B88B05577E"
 ],
 "id": "Container_39207360_2A23_19D0_418B_A07EA445419A",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E394C08_2A25_0F50_41A1_C71B44E23ED6"
 ],
 "id": "Container_3F567062_2A23_37D0_41B3_88EEFA2400CE",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3F55A062_2A23_37D0_41AA_3614845BCE92"
 ],
 "id": "Container_3F565062_2A23_37D0_41B1_1EAADD51C851",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E3E3860_2A27_37D6_41B3_46C1FAD474FE"
 ],
 "id": "Container_3F351648_2A23_1BD0_41A1_020EFB9781E3",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3F355649_2A23_1BD0_41BA_EA8E7E0CF54C"
 ],
 "id": "Container_3F357649_2A23_1BD0_41C4_2A963F12E344",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E04624F_2A27_1BD0_41B3_D3F70908F810"
 ],
 "id": "Container_39379D1A_2A23_0970_41C3_025CA2CF75F6",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_39374D1A_2A23_0970_41B0_A80DB17704E5"
 ],
 "id": "Container_3937BD1A_2A23_0970_41C3_DA68CB82AC4D",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E4ED394_2A27_3971_41C1_A67396F15096"
 ],
 "id": "Container_3E894E2D_2A23_0B53_41BD_7556868D485E",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3E891E2D_2A23_0B53_41C0_F54ADD49D704"
 ],
 "id": "Container_3E896E2D_2A23_0B53_41AA_6399232A8FD0",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3FC69234_2A27_3BB0_41B6_751AD66CDD00"
 ],
 "id": "Container_393F32CC_2A23_18D1_41B1_0B706CA42CAC",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_393F02CC_2A23_18D1_41C0_A6951B05E571"
 ],
 "id": "Container_393F12CC_2A23_18D1_416C_6DF16EE3E032",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3F9DCB98_2A25_0971_41A8_979C0974FED6"
 ],
 "id": "Container_39394202_2A25_3B50_4198_56EDE536D2E2",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3939B202_2A25_3B50_41C2_72843FE63D95"
 ],
 "id": "Container_3939A202_2A25_3B50_41C4_22EF318E576E",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3E33C04F_2A2D_17D0_419D_BDAAEBE7890F"
 ],
 "id": "Container_3E26C40B_2A23_1F57_41C2_643581053F90",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3E26140B_2A23_1F57_41C5_1172DDD0A1B8"
 ],
 "id": "Container_3E26240B_2A23_1F57_41C5_3E49FBA0C63B",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 600,
 "maxWidth": 1000,
 "children": [
  "this.Image_3F87B09B_2A2F_1777_41C2_60BC39B06A49"
 ],
 "id": "Container_3E873D07_2A2D_095F_4186_ADE6EF9E5749",
 "left": "2%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "2%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 2,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "maxHeight": 600,
 "children": [
  "this.IconButton_3E870D07_2A2D_095F_4190_E512FE932D78"
 ],
 "id": "Container_3E871D07_2A2D_095F_41BF_5DFD7D00941F",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "2%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 400,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": true,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "maxWidth": 1000
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF352BA1_FF4E_1E11_41C6_734AC9B62089",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF357BA1_FF4E_1E11_41E5_480D5D888468",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1CFC076_FAC2_0AF0_41E4_C6EB32F6DFF5_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E3D0437D_FB46_0EF0_41E9_9C3BF7D60235",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1FFF34A_FAC6_0E13_41B9_480D97C451E8",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E6287A68_FAC2_1E1F_41C9_855D9FB56409",
 "colCount": 4,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_F1C3135C_FAC2_0E30_41E5_3741746F4D72_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_EDDBADF8_FB5E_35F0_41D0_29F5028ADDF0",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E705E4BB_FB42_0A70_41D6_83CA26DF9017",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C82F39_FAC2_3670_41EA_45BAB4480B13_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E0174336_FB42_0E70_41D9_D2F28C0D7B19",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E6D9C35D_FB42_0E31_41EC_A3FAFD82707F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E7F47B09_FB42_3E10_41C9_7DEA93FCE687",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E629FA69_FAC2_1E11_41DA_8CDF32C06FB0",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1FEA9A6_FABE_3A10_41E8_A81D38F2351F_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E6299A69_FAC2_1E11_41EA_F89BCA926187",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1382648_FB42_3610_41CF_6A7024CB68E3",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E101741C_FB4E_0A30_41E9_97E039338E99",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF303BA1_FF4E_1E11_41EE_84DB44949658",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF304BA1_FF4E_1E11_41EA_3D33A354F5F4",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF308BA1_FF4E_1E11_41E4_96596611F331",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_8_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF30CBA1_FF4E_1E11_41D1_E1DFCB5BE3B1",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03FD53B_FAC2_0A70_41DB_76E1DE236E03_0_HS_9_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_EE796367_FB7E_0E10_4188_DB76611B6BC4",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF3C4BB0_FF4E_1E70_41E2_F83D672F43B7",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C989F7_FAC2_1DF1_41D2_1DDFB78DBB2F_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E011F337_FB42_0E70_41E4_4AAF89C31ACB",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF31ABA1_FF4E_1E11_41C3_D2518E3D56D7",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF31EBA1_FF4E_1E11_41E6_79873187A674",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF3E3BA1_FF4E_1E11_41E1_02DDAA8E9093",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF3E5BA1_FF4E_1E11_41DD_81AB74EA9161",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF3EBBB0_FF4E_1E70_41E9_CA0AD1973A7F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF3EDBB0_FF4E_1E70_41E0_268F8BE126B2",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_DF3F0BB0_FF4E_1E70_41ED_3831F84BB7CF",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03E7E88_FAC2_1610_41CE_663E2D0C7AD4_0_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1FF6349_FAC6_0E11_41E5_D1431ECAB3F1",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F03AD5AE_FAC2_0A10_41E9_0A40CA50A919_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1F87349_FAC6_0E11_41C5_25EDB7FB7663",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1487B03_FAC2_1E11_41EE_4A0098A14815",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1F88349_FAC6_0E11_41EF_03B374BDC704",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F1C5CD10_FAC2_7A30_41EF_4FE1CC5464A4_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "children": [
  "this.IconButton_054C96D4_10AD_A88A_41A5_B93F3A7ABD0E"
 ],
 "id": "Container_054C86D4_10AD_A88A_41A3_4251E516367C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 600,
 "id": "Image_041D5428_1F74_1D41_4196_D26CA9EE0E20",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "99.999%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_041D5428_1F74_1D41_4196_D26CA9EE0E20.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image53121"
 },
 "maxWidth": 1000
},
{
 "height": "29.298%",
 "id": "Container_0946C0AF_1FAC_355F_41A3_9C7EF5AF0591",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.977%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Container57321"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_0983DAE6_1FAC_2AC1_41A4_EF396039B5CD",
  "this.Button_0815FAE1_1FAC_2AC3_4190_3B63988E4C36",
  "this.Button_08633C19_1FAC_2D43_41AD_FA94AA2573A2"
 ],
 "height": "25.613%",
 "id": "Container_08394684_1F54_7D41_418A_72E4D7E0BE17",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.977%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container56923"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_083463E9_1FAC_1AC3_4194_19B57DF43B10",
  "this.Button_083443E9_1FAC_1AC3_41BD_DAE068CE80A9",
  "this.Button_0837B3E9_1FAC_1AC3_4186_B24E73AD2918"
 ],
 "height": "25.613%",
 "id": "Container_080A242B_1FAC_1D47_41A9_9D741B5AF8D7",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.977%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container56923"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_073BA71B_1F54_1B47_41AD_98F23ED5E554, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_073BD71B_1F54_1B47_41AE_CFDE926A37ED.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "height": "100%",
 "id": "WebFrame_0BA669B1_1F7C_1743_41BC_E23F4262DCB8",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/6a9a3951605d4a498c8b371b848813ab/embed",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame284417"
 },
 "insetBorder": false,
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_0BA619B1_1F7C_1743_41B0_59972C6193E6.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BBAFD60_1F7F_EFC1_419A_348995F02937",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/662b87fd785e47efa76e5d97c3500709/embed",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame284417"
 },
 "insetBorder": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_0BBAAD60_1F7F_EFC1_41A8_E7AE96AC6A17.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_096B82AF_1F7C_155F_41AF_158FE7F3476B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/f7554354af304aa0b847c27b8838db21/embed",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame284417"
 },
 "insetBorder": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_096BB2AF_1F7C_155F_41A4_EF75318506EA.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BFB3AC0_1F7B_EAC1_41B1_DCCCBBA68E4E",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/3feb2527f31641e6aceb83913e8a1e3a/embed",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame284417"
 },
 "insetBorder": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_0BFB0AC0_1F7B_EAC1_41AD_55AEAED19F77.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BD066F6_1F74_3AC1_41B4_84FB2A581236",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/bdf38319f9294b1cb31a7c1bb3ee3a21/embed",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame284417"
 },
 "insetBorder": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_0BD0B6F6_1F74_3AC1_41BD_75B65028EC58.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_0BF78C98_1F74_6D41_41BE_62818EEBC900",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "99.98%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "https://sketchfab.com/models/495a55eb95b64b6497cce8d6663f829f/embed",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame284417"
 },
 "insetBorder": false,
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_0BF7DC98_1F74_6D41_41BC_185308D55476.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E723788_2A27_1951_41B5_2028F0FC8AC7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E723788_2A27_1951_41B5_2028F0FC8AC7.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image16211"
 },
 "maxWidth": 1088
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_2567ABE5_2AFD_08D3_41AD_4EFBC3C06D23",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_25679BE5_2AFD_08D3_41B8_85321F8F1FE9, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_2567ABE5_2AFD_08D3_41AD_4EFBC3C06D23_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_2567ABE5_2AFD_08D3_41AD_4EFBC3C06D23.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3FAF08A9_2A25_3750_41C4_14F5DC0166BA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "90%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3FAF08A9_2A25_3750_41C4_14F5DC0166BA.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image17714"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_397125B1_2A25_F8B3_41BB_CE8A4CAD1373",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_397135B1_2A25_F8B3_41C4_43A98EE99B7B, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_397125B1_2A25_F8B3_41BB_CE8A4CAD1373_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_397125B1_2A25_F8B3_41BB_CE8A4CAD1373.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E70AAFC_2A2F_08B0_41BE_0C904D774985",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E70AAFC_2A2F_08B0_41BE_0C904D774985.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image18330"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3F1A2AB5_2A25_08B3_41B7_ADB64D939A5F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3F1A5AB5_2A25_08B3_41BD_4A801D76AD10, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3F1A2AB5_2A25_08B3_41B7_ADB64D939A5F_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3F1A2AB5_2A25_08B3_41B7_ADB64D939A5F.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3FE67E32_2A25_0BB1_41C1_A19ECBAE6B69",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3FE67E32_2A25_0BB1_41C1_A19ECBAE6B69.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image24859"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3915FC59_2A23_0FF3_41B4_EA52C51EEACC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3915EC59_2A23_0FF3_41B3_5C5A5DD2550A, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3915FC59_2A23_0FF3_41B4_EA52C51EEACC_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3915FC59_2A23_0FF3_41B4_EA52C51EEACC.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3FDA2D8C_2A25_0950_4197_1F2500435BA0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3FDA2D8C_2A25_0950_4197_1F2500435BA0.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image25024"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_39206360_2A23_19D0_41B5_67B88B05577E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39205360_2A23_19D0_41C2_9FD6841A554A, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_39206360_2A23_19D0_41B5_67B88B05577E_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_39206360_2A23_19D0_41B5_67B88B05577E.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E394C08_2A25_0F50_41A1_C71B44E23ED6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E394C08_2A25_0F50_41A1_C71B44E23ED6.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image25318"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3F55A062_2A23_37D0_41AA_3614845BCE92",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3F55B062_2A23_37D0_41C2_AA5B8C845BAA, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3F55A062_2A23_37D0_41AA_3614845BCE92_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3F55A062_2A23_37D0_41AA_3614845BCE92.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E3E3860_2A27_37D6_41B3_46C1FAD474FE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E3E3860_2A27_37D6_41B3_46C1FAD474FE.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image25576"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3F355649_2A23_1BD0_41BA_EA8E7E0CF54C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3F354649_2A23_1BD0_41B0_B071207B5256, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3F355649_2A23_1BD0_41BA_EA8E7E0CF54C_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3F355649_2A23_1BD0_41BA_EA8E7E0CF54C.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E04624F_2A27_1BD0_41B3_D3F70908F810",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E04624F_2A27_1BD0_41B3_D3F70908F810.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image25874"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_39374D1A_2A23_0970_41B0_A80DB17704E5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39375D1A_2A23_0970_41C5_5691CCF66CEF, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_39374D1A_2A23_0970_41B0_A80DB17704E5_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_39374D1A_2A23_0970_41B0_A80DB17704E5.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E4ED394_2A27_3971_41C1_A67396F15096",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E4ED394_2A27_3971_41C1_A67396F15096.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image26084"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3E891E2D_2A23_0B53_41C0_F54ADD49D704",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3E890E2D_2A23_0B53_41C2_324B096A9FE2, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3E891E2D_2A23_0B53_41C0_F54ADD49D704_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3E891E2D_2A23_0B53_41C0_F54ADD49D704.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3FC69234_2A27_3BB0_41B6_751AD66CDD00",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3FC69234_2A27_3BB0_41B6_751AD66CDD00.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image26233"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_393F02CC_2A23_18D1_41C0_A6951B05E571",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_393EF2CC_2A23_18D1_41A7_B03B71E1D4FF, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_393F02CC_2A23_18D1_41C0_A6951B05E571_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_393F02CC_2A23_18D1_41C0_A6951B05E571.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3F9DCB98_2A25_0971_41A8_979C0974FED6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3F9DCB98_2A25_0971_41A8_979C0974FED6.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image26477"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3939B202_2A25_3B50_41C2_72843FE63D95",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39398202_2A25_3B50_41C3_FEC2A6C7529B, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3939B202_2A25_3B50_41C2_72843FE63D95_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3939B202_2A25_3B50_41C2_72843FE63D95.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3E33C04F_2A2D_17D0_419D_BDAAEBE7890F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3E33C04F_2A2D_17D0_419D_BDAAEBE7890F.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image30512"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3E26140B_2A23_1F57_41C5_1172DDD0A1B8",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3E26040B_2A23_1F57_41A4_F27CCFDADE3C, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3E26140B_2A23_1F57_41C5_1172DDD0A1B8_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3E26140B_2A23_1F57_41C5_1172DDD0A1B8.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 600,
 "id": "Image_3F87B09B_2A2F_1777_41C2_60BC39B06A49",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 400,
 "borderSize": 0,
 "url": "skin/Image_3F87B09B_2A2F_1777_41C2_60BC39B06A49.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image30709"
 },
 "maxWidth": 1000
},
{
 "maxHeight": 60,
 "height": "8.955%",
 "id": "IconButton_3E870D07_2A2D_095F_4190_E512FE932D78",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "4.529%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3E877D07_2A2D_095F_41BA_352EA3835BEB, false, 0, null, null, false)",
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_3E870D07_2A2D_095F_4190_E512FE932D78_pressed_rollover.jpg",
 "iconURL": "skin/IconButton_3E870D07_2A2D_095F_4190_E512FE932D78.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "height": "36.429%",
 "id": "IconButton_054C96D4_10AD_A88A_41A5_B93F3A7ABD0E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "7.764%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_054CB6D4_10AD_A88A_4180_E524EE63996A, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_054C96D4_10AD_A88A_41A5_B93F3A7ABD0E.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "fontFamily": "Agency FB",
 "rollOverShadow": false,
 "pressedFontColor": "#000000",
 "id": "Button_0983DAE6_1FAC_2AC1_41A4_EF396039B5CD",
 "backgroundOpacity": 0.38,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 218,
 "borderRadius": 10,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 5,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "pressedBackgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.38,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "fontSize": "22px",
 "label": "3D Bedogol Kiri",
 "rollOverFontColor": "#000000",
 "gap": 5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_0BA629B1_1F7C_1743_41B4_67C487A33FCC, true, 0, this.effect_036B1FB3_1FDC_6B47_41B2_FF4D6EEBB4BE, 'showEffect', false)",
 "fontColor": "#000000",
 "class": "Button",
 "height": 71,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Agency FB",
 "rollOverShadow": false,
 "pressedFontColor": "#000000",
 "id": "Button_0815FAE1_1FAC_2AC3_4190_3B63988E4C36",
 "backgroundOpacity": 0.38,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 218,
 "borderRadius": 10,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 5,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "pressedBackgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.38,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "fontSize": "22px",
 "label": "3D Bedogol Kanan",
 "rollOverFontColor": "#000000",
 "gap": 5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_0BBABD60_1F7F_EFC1_41BA_D9459033D360, true, 0, this.effect_04FE4F27_1FDC_2B4F_41B4_1F4DCBE5A28F, 'showEffect', false)",
 "fontColor": "#000000",
 "class": "Button",
 "height": 71,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Agency FB",
 "rollOverShadow": false,
 "pressedFontColor": "#000000",
 "id": "Button_08633C19_1FAC_2D43_41AD_FA94AA2573A2",
 "backgroundOpacity": 0.38,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 218,
 "borderRadius": 10,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 5,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "pressedBackgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.38,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "fontSize": "22px",
 "label": "3D Bhatari Durga Kiri",
 "rollOverFontColor": "#000000",
 "gap": 5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_096BD2AF_1F7C_155F_41B3_CB58CBF42872, true, 0, this.effect_04F49D2D_1FDC_2F43_41B8_7336735597E4, 'showEffect', false)",
 "fontColor": "#000000",
 "class": "Button",
 "height": 71,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Agency FB",
 "rollOverShadow": false,
 "pressedFontColor": "#000000",
 "id": "Button_083463E9_1FAC_1AC3_4194_19B57DF43B10",
 "backgroundOpacity": 0.38,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 218,
 "borderRadius": 10,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 5,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "pressedBackgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.38,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "fontSize": "22px",
 "label": "3D Bhatari Durga Kanan",
 "rollOverFontColor": "#000000",
 "gap": 5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_0BFAFAC0_1F7B_EAC1_41B0_DE49C7374F30, true, 0, this.effect_049FAA96_1FD4_1541_41A3_3F738E47771F, 'showEffect', false)",
 "fontColor": "#000000",
 "class": "Button",
 "height": 71,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Agency FB",
 "rollOverShadow": false,
 "pressedFontColor": "#000000",
 "id": "Button_083443E9_1FAC_1AC3_41BD_DAE068CE80A9",
 "backgroundOpacity": 0.38,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 218,
 "borderRadius": 10,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 5,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "pressedBackgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.38,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "fontSize": "17px",
 "label": "3D B. Durga pada Pelinggih Kiri",
 "rollOverFontColor": "#000000",
 "gap": 5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_0BD0A6F6_1F74_3AC1_419C_E047E2202E47, true, 0, this.effect_04F1828C_1FD4_1541_41A6_701F6C6BA119, 'showEffect', false)",
 "fontColor": "#000000",
 "class": "Button",
 "height": 71,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Agency FB",
 "rollOverShadow": false,
 "pressedFontColor": "#000000",
 "id": "Button_0837B3E9_1FAC_1AC3_4186_B24E73AD2918",
 "backgroundOpacity": 0.38,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 218,
 "borderRadius": 10,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 5,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "pressedBackgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.38,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "fontSize": "17px",
 "label": "3D B. Durga pada Pelinggih Kanan",
 "rollOverFontColor": "#000000",
 "gap": 5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_0BF7CC98_1F74_6D41_41B1_39AAC50FE435, true, 0, this.effect_04F5F9D1_1FD4_76C3_41AB_10539A0D8E94, 'showEffect', false)",
 "fontColor": "#000000",
 "class": "Button",
 "height": 71,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "bold",
 "shadowSpread": 1
}],
 "horizontalAlign": "left",
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "class": "Player",
 "shadow": false,
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Player436"
 },
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
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
