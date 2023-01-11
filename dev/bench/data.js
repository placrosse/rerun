window.BENCHMARK_DATA = {
  "lastUpdate": 1673461676362,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b839da522909cfa5e0b326bc984a94d21e537c35",
          "message": "fix merge race between #665 & #666 (#670)\n\n* all the new derives\r\n\r\n* arrow2-convert with windows patch\r\n\r\n* Revert \"all the new derives\"\r\n\r\nThis reverts commit a2f5cf4a5fef4dcdee39c056009a3e3cb709f0ea.\r\n\r\n* dude please run the CI???\r\n\r\nThis reverts commit c0ef309ca9eb0d8d4f9005fbc03d5fab133c4300.",
          "timestamp": "2023-01-04T15:45:13+01:00",
          "tree_id": "fe3a0945528bd2d353f95bc93ece88d6fc7de838",
          "url": "https://github.com/rerun-io/rerun/commit/b839da522909cfa5e0b326bc984a94d21e537c35"
        },
        "date": 1672844260438,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 271022,
            "range": "± 1783",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 719,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46012,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 854075445,
            "range": "± 5817341",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357409,
            "range": "± 1564",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86773613,
            "range": "± 325383",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11446,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22818093,
            "range": "± 188181",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7985,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4331351,
            "range": "± 64575",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11176053,
            "range": "± 448312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15500556,
            "range": "± 937565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35464410,
            "range": "± 624032",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49283822,
            "range": "± 749976",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126132857,
            "range": "± 960380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156440977,
            "range": "± 1414541",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332162445,
            "range": "± 1752232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180181668,
            "range": "± 1309728",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71589682,
            "range": "± 978238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245915978,
            "range": "± 1611514",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3376,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423176,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430502,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725740,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323308,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6277,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366707,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715067,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350408,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2169,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356378,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5934314503,
            "range": "± 18769024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1623048,
            "range": "± 8501",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2576033,
            "range": "± 10728",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13779,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "602871211d7ff4023a34288ce3317260d47d40b0",
          "message": "Unify spatial picking & fix \"3d in 2d\" picking (#663)\n\n* 3d picking ui is now almost identical to 2d picking ui\r\n* picking can now always handle transparent objects\r\n* move picking to its own module\r\n* fix 2d labels not showing\r\n* 2d boxes are no longer hovered like rects",
          "timestamp": "2023-01-04T15:57:48+01:00",
          "tree_id": "8f31c92589f00cc04a234184e1f84ab42576f7ca",
          "url": "https://github.com/rerun-io/rerun/commit/602871211d7ff4023a34288ce3317260d47d40b0"
        },
        "date": 1672845050476,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280132,
            "range": "± 3568",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 720,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46090,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 986058425,
            "range": "± 4463992",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369624,
            "range": "± 5831",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95454744,
            "range": "± 482687",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11455,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23751891,
            "range": "± 140742",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7986,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4554763,
            "range": "± 205564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13018109,
            "range": "± 745989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17416457,
            "range": "± 1440900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37254629,
            "range": "± 618212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53658543,
            "range": "± 745098",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139683030,
            "range": "± 1351471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167980934,
            "range": "± 1829984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 362087694,
            "range": "± 2186589",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190285867,
            "range": "± 1080668",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 83027261,
            "range": "± 977715",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 266464408,
            "range": "± 2710491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3368,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 422729,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 429743,
            "range": "± 1299",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725510,
            "range": "± 2370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322266,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6281,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 368357,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713331,
            "range": "± 3530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349118,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2156,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357227,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6900745027,
            "range": "± 26101239",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1648018,
            "range": "± 23818",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2645914,
            "range": "± 56318",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13738,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a9cc8fa343863dea0a2fa5b0e2660fdd608af9",
          "message": "Splat colors and radii on the client side as necessary (#671)",
          "timestamp": "2023-01-04T17:48:45+01:00",
          "tree_id": "63885f184d6906b2859fa5b77225b05cf2cea7a6",
          "url": "https://github.com/rerun-io/rerun/commit/14a9cc8fa343863dea0a2fa5b0e2660fdd608af9"
        },
        "date": 1672851708566,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 272658,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 732,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 308,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46322,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 968213631,
            "range": "± 10992011",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362145,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94516426,
            "range": "± 465105",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11430,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23020798,
            "range": "± 352888",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7988,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4401474,
            "range": "± 85096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11276028,
            "range": "± 912949",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15064909,
            "range": "± 869574",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35204850,
            "range": "± 980816",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52293051,
            "range": "± 1100752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139092138,
            "range": "± 1324885",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166848973,
            "range": "± 1057556",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357023279,
            "range": "± 1742375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189910421,
            "range": "± 903527",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80875022,
            "range": "± 1310206",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264471847,
            "range": "± 1805072",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3571,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 422942,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430554,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725993,
            "range": "± 5210",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321971,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6357,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361103,
            "range": "± 2006",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710484,
            "range": "± 4672",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348365,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356813,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6877712124,
            "range": "± 20267372",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1648228,
            "range": "± 13721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2555962,
            "range": "± 30581",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13786,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "711a7653cc8a7082d922c040eeae076f5477b441",
          "message": "Add radius to log_point API for arrow (#673)",
          "timestamp": "2023-01-04T18:13:52+01:00",
          "tree_id": "6589b0e550dcf16bcb283739356fea3635ee77a5",
          "url": "https://github.com/rerun-io/rerun/commit/711a7653cc8a7082d922c040eeae076f5477b441"
        },
        "date": 1672853272935,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 270357,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 378,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46232,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 857647174,
            "range": "± 6404420",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 348001,
            "range": "± 3032",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87883968,
            "range": "± 423988",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11643,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21904924,
            "range": "± 381978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7940,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4321981,
            "range": "± 117513",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10802729,
            "range": "± 343440",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15201630,
            "range": "± 442286",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 33990134,
            "range": "± 679377",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46563265,
            "range": "± 1177546",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127924397,
            "range": "± 1402404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152530632,
            "range": "± 1849146",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327654196,
            "range": "± 1628895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177461911,
            "range": "± 1438796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68581118,
            "range": "± 922822",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 247465728,
            "range": "± 2125907",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3348,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418524,
            "range": "± 3584",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423001,
            "range": "± 3771",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 722773,
            "range": "± 5790",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 314492,
            "range": "± 3339",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6263,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360604,
            "range": "± 2625",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699572,
            "range": "± 5275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344411,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2126,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352757,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5836563030,
            "range": "± 17364516",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1583588,
            "range": "± 15719",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2524084,
            "range": "± 17118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13505,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b41ec9847a547316ddae26f8c743ddebad60ee12",
          "message": "Replace latest_components_at with all_components (#664)\n\nAs demonstrated by @teh-cmc in #662, latest_components_at had some undesirable behavior. This replaces it with all_components, which is more explicit and produces the behavior we expect in the UI even in cases of pathological bucket-splits.",
          "timestamp": "2023-01-04T21:38:12+01:00",
          "tree_id": "fdbd3f66a39cf2183d05a0550a5e2a507de801f5",
          "url": "https://github.com/rerun-io/rerun/commit/b41ec9847a547316ddae26f8c743ddebad60ee12"
        },
        "date": 1672865574148,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276668,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 722,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45367,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 992080991,
            "range": "± 3861613",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 367743,
            "range": "± 1676",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95176392,
            "range": "± 373038",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11445,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23723672,
            "range": "± 199642",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8013,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4335634,
            "range": "± 94431",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11389869,
            "range": "± 543263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16853558,
            "range": "± 733469",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36582122,
            "range": "± 669453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52981719,
            "range": "± 719951",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141497659,
            "range": "± 1309828",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165469951,
            "range": "± 753171",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358570726,
            "range": "± 1350026",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188511868,
            "range": "± 888819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81687664,
            "range": "± 1015105",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264751747,
            "range": "± 1595567",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3440,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423376,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 431025,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729380,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 320884,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6270,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360334,
            "range": "± 1322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713431,
            "range": "± 2935",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349975,
            "range": "± 1023",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2139,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356596,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6968394670,
            "range": "± 12945999",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1603275,
            "range": "± 12078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2629708,
            "range": "± 11512",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13324,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8fc9fba74e30e5be0a00c7674945e1c7f4574f5",
          "message": "Make tensor and image logging more lenient (#634)\n\n* make _log_tensor compatible with pytorch tensors\r\n\r\n* Break out name extraction for pytorch tensors\r\n\r\n* Make image logging more lenient\r\n\r\n* Send warning to rerun instead of raising exception\r\n\r\n* log (depth) image handles non numpy arrays\r\n\r\n* Send SDK warnings to python logging as well\r\n\r\n* Drop \"up\" if \"xyz\" also given\r\n\r\n\r\nCo-authored-by: Nikolaus West <niko@rerun.io>",
          "timestamp": "2023-01-04T22:02:09+01:00",
          "tree_id": "6ce6920c511a4e786b0efb23f72820d0140fdb89",
          "url": "https://github.com/rerun-io/rerun/commit/f8fc9fba74e30e5be0a00c7674945e1c7f4574f5"
        },
        "date": 1672866902850,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273602,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 716,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45075,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 965813925,
            "range": "± 4623852",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 373926,
            "range": "± 2152",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95399811,
            "range": "± 451519",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11474,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23707747,
            "range": "± 185187",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7956,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4455460,
            "range": "± 312634",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12605556,
            "range": "± 797196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16311426,
            "range": "± 1365567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37659409,
            "range": "± 607698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53098519,
            "range": "± 773889",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138491896,
            "range": "± 1387243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166312158,
            "range": "± 1592016",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359387120,
            "range": "± 2481840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188801361,
            "range": "± 883462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 82387802,
            "range": "± 1139567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264504733,
            "range": "± 1763284",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3545,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 422938,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430514,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725022,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321510,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6247,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367770,
            "range": "± 1765",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715013,
            "range": "± 2818",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353109,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2152,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354903,
            "range": "± 1395",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7095751452,
            "range": "± 24143749",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641599,
            "range": "± 15491",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625671,
            "range": "± 12357",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13415,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21326f4edab512b047cfb8e7511d0481c12e4cbf",
          "message": "Stable diffusion example (#642)\n\n* Remove unused imports from the tracking example\r\n\r\n* Add stable diffusion example\r\n\r\n* Update defaults for more fun out of the box image",
          "timestamp": "2023-01-04T22:16:58+01:00",
          "tree_id": "ab8a7f461d5694df9c798928e5a3f9ca1d209a63",
          "url": "https://github.com/rerun-io/rerun/commit/21326f4edab512b047cfb8e7511d0481c12e4cbf"
        },
        "date": 1672867893989,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 271246,
            "range": "± 3272",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 715,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 366,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44555,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 993599366,
            "range": "± 3466295",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 358097,
            "range": "± 2205",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 93807823,
            "range": "± 813016",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11297,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22867417,
            "range": "± 310420",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7867,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4317657,
            "range": "± 100406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11043267,
            "range": "± 366864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15412265,
            "range": "± 502232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34633684,
            "range": "± 1047603",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49476566,
            "range": "± 1002929",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137089649,
            "range": "± 1533415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164304897,
            "range": "± 1239398",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354792773,
            "range": "± 1837796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186167415,
            "range": "± 1612847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80312670,
            "range": "± 1288567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 261184571,
            "range": "± 2237268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3420,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423976,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423928,
            "range": "± 3974",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 715812,
            "range": "± 6780",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317630,
            "range": "± 3724",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6151,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363016,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699968,
            "range": "± 6605",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350320,
            "range": "± 1822",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2125,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352069,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6955334236,
            "range": "± 18335487",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1564832,
            "range": "± 18589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2526251,
            "range": "± 20617",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13175,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c5f5b5a5e1ba5d03f523fa6aec6a9d49d29aa11",
          "message": "Fix a bug that meant we never sqeezed images (#679)\n\nCo-authored-by: Nikolaus West <niko@rerun.io>",
          "timestamp": "2023-01-05T10:00:08+01:00",
          "tree_id": "79ff6b5d615529f589dcc3ddaef668846f5b7b9e",
          "url": "https://github.com/rerun-io/rerun/commit/1c5f5b5a5e1ba5d03f523fa6aec6a9d49d29aa11"
        },
        "date": 1672909994968,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273519,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 717,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45018,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1004110432,
            "range": "± 2834395",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 363368,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97571948,
            "range": "± 494739",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11465,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23485118,
            "range": "± 163666",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7998,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4381348,
            "range": "± 88214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11692954,
            "range": "± 652884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16454384,
            "range": "± 547068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36221718,
            "range": "± 422359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52801391,
            "range": "± 697133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138181909,
            "range": "± 1258869",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165463963,
            "range": "± 909338",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358192816,
            "range": "± 1381629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188514682,
            "range": "± 1727298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81470359,
            "range": "± 1085488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263870722,
            "range": "± 1635571",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3393,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 424639,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 429600,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726235,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318800,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6268,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359710,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 719996,
            "range": "± 2041",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350286,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2147,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352989,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6989426775,
            "range": "± 9272560",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1650507,
            "range": "± 9370",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2648515,
            "range": "± 10267",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13364,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4d03fbac6421b06af2e82af719109c01014b309",
          "message": "Fix origin axis and missing line cap for last line (#689)\n\n* origin/camera axis rendering to be properly in screenspace\r\n* fix missing line cap for last line in a batch",
          "timestamp": "2023-01-05T17:04:50+01:00",
          "tree_id": "d4f9e1d17ed0df5d4ac10ebeade49fc063e45bea",
          "url": "https://github.com/rerun-io/rerun/commit/d4d03fbac6421b06af2e82af719109c01014b309"
        },
        "date": 1672935475983,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279274,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 709,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44852,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 973362818,
            "range": "± 7210170",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354359,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95324519,
            "range": "± 561849",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11478,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23719487,
            "range": "± 119197",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7984,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4385784,
            "range": "± 62445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12116602,
            "range": "± 761781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15792389,
            "range": "± 700184",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36089899,
            "range": "± 838128",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52242099,
            "range": "± 729644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137966537,
            "range": "± 1297871",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164568242,
            "range": "± 1350877",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357288674,
            "range": "± 2004157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189623003,
            "range": "± 1203685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80824631,
            "range": "± 1152982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264336316,
            "range": "± 1666799",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3542,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423199,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430304,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725987,
            "range": "± 1450",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319407,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6328,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360352,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 719509,
            "range": "± 3254",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354684,
            "range": "± 2075",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2166,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359107,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7026191776,
            "range": "± 32527711",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1696818,
            "range": "± 13415",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2607735,
            "range": "± 20741",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13303,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29185ddadc60c8e23a12d9b91e4ff0024e7c2d5c",
          "message": "Fix 2D depth issues (#680)\n\n* depth offsets for rectangles\r\n* remove point/line depth offsets and 2d outlines\r\n* 2d picking is now aware of depth offset\r\n* more robust navmode (2d/3d view) heuristic",
          "timestamp": "2023-01-05T17:26:34+01:00",
          "tree_id": "ac82b0904ef4100fd91e60776e920f4763beb733",
          "url": "https://github.com/rerun-io/rerun/commit/29185ddadc60c8e23a12d9b91e4ff0024e7c2d5c"
        },
        "date": 1672936928551,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 270384,
            "range": "± 7949",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 702,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 294,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 358,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 43235,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 996610745,
            "range": "± 4692516",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 341993,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 92296540,
            "range": "± 1093281",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11318,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22023767,
            "range": "± 326755",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7681,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4172763,
            "range": "± 58790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10151362,
            "range": "± 276369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14295512,
            "range": "± 295701",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 32409274,
            "range": "± 626914",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46120854,
            "range": "± 1449712",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134922395,
            "range": "± 1737169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160064383,
            "range": "± 1453339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350231425,
            "range": "± 3235221",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180605288,
            "range": "± 2345198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77285607,
            "range": "± 1370938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255773154,
            "range": "± 3112628",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3336,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 411853,
            "range": "± 6513",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 416368,
            "range": "± 7079",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 700485,
            "range": "± 11541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 306504,
            "range": "± 4298",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5989,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355739,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 693829,
            "range": "± 8068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342940,
            "range": "± 3600",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2058,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345534,
            "range": "± 3535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6929423720,
            "range": "± 23538350",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1576285,
            "range": "± 28878",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2518666,
            "range": "± 37070",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12802,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "987fab8a2688c3e511eed07da826f90bb1f3a00a",
          "message": "End-to-end support for logging transforms via arrow (#674)\n\n* Add arrow support for Transforms\r\n* Allow bridge to do arrow logging\r\n* Add arrow logging for transforms from bridge\r\n* Look up transforms in arrow store\r\n* Encode quaternion and vec as fixed size lists\r\n* Make Vec / Mat fixed-sized arrays",
          "timestamp": "2023-01-06T15:30:54+01:00",
          "tree_id": "3fd1118bd4983efd992edefd962ae1fc017c93b1",
          "url": "https://github.com/rerun-io/rerun/commit/987fab8a2688c3e511eed07da826f90bb1f3a00a"
        },
        "date": 1673016417302,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276706,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 728,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46087,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 965642886,
            "range": "± 3748457",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 347406,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98267724,
            "range": "± 606363",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11496,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23823469,
            "range": "± 110978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8034,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4748602,
            "range": "± 288970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12525549,
            "range": "± 731767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17023271,
            "range": "± 1270661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38783153,
            "range": "± 738017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53829985,
            "range": "± 722110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139316891,
            "range": "± 1235530",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166393469,
            "range": "± 1544500",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359669014,
            "range": "± 2553526",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190109175,
            "range": "± 1010743",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80596345,
            "range": "± 892917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265482670,
            "range": "± 1762908",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3407,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 403108,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 408273,
            "range": "± 2704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729474,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318459,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6274,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350109,
            "range": "± 1532",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704534,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352523,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2118,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358503,
            "range": "± 2212",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7042726543,
            "range": "± 27648720",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1640608,
            "range": "± 18912",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2632034,
            "range": "± 15575",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15113,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "180e1714f59f0556089e7451f3c37e8c506cc905",
          "message": "Clean up arrow arrays before we push them into polars (#696)\n\n* Demonstrate the polars conversion is broken for transforms\r\n* New utility to make arrow arrays safe for polars\r\n* Make clean_for_polars part of ArrowExt trait",
          "timestamp": "2023-01-06T15:51:52+01:00",
          "tree_id": "8ef00262787cfbe683368b08716d166a94673d1d",
          "url": "https://github.com/rerun-io/rerun/commit/180e1714f59f0556089e7451f3c37e8c506cc905"
        },
        "date": 1673017575557,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278568,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 726,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45911,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 982872620,
            "range": "± 11129238",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 346649,
            "range": "± 3601",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98631135,
            "range": "± 1834676",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11510,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23852245,
            "range": "± 338640",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8013,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4462206,
            "range": "± 154957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12969557,
            "range": "± 1197375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17844077,
            "range": "± 1478130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38033831,
            "range": "± 917988",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54988262,
            "range": "± 1781653",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140042143,
            "range": "± 3200129",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166075909,
            "range": "± 1726280",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360511899,
            "range": "± 3727992",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186309645,
            "range": "± 1936316",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77593477,
            "range": "± 1058682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260907904,
            "range": "± 1688465",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3581,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 400773,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 405737,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727572,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322927,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6220,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347377,
            "range": "± 1653",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699838,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343999,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2147,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350478,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6787470989,
            "range": "± 16573042",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1610902,
            "range": "± 8828",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2618111,
            "range": "± 8294",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15070,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e201048fa1c366f8632b6c476b2e06cd6914e5ac",
          "message": "Enable arrow conversions for the AnnotationContext (#678)\n\n* Move context -> field_types\r\n* Switch AnnotationInfo to use Label and ColorRGBA fields\r\n* Arrow conversions for AnnotationContext\r\n* Add From<bytes> for ColorRGBA",
          "timestamp": "2023-01-06T16:13:06+01:00",
          "tree_id": "f7bfe16f65f88ac23287cfe254ab9dd54c22be9d",
          "url": "https://github.com/rerun-io/rerun/commit/e201048fa1c366f8632b6c476b2e06cd6914e5ac"
        },
        "date": 1673018730655,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280545,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 728,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46188,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 842716504,
            "range": "± 16245657",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 374142,
            "range": "± 2193",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89735212,
            "range": "± 488604",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10947,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22916198,
            "range": "± 167327",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7196,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4351720,
            "range": "± 61963",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11421161,
            "range": "± 587598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15257173,
            "range": "± 594931",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35611286,
            "range": "± 704017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48217560,
            "range": "± 640102",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123970669,
            "range": "± 1057624",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149130371,
            "range": "± 890730",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331413644,
            "range": "± 3179944",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179099259,
            "range": "± 2276953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70689098,
            "range": "± 1138518",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 246796769,
            "range": "± 2149151",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3654,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393674,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 399485,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743357,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323273,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6121,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351877,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698188,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352098,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2162,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356415,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6146544522,
            "range": "± 38129946",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1665364,
            "range": "± 10231",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2722775,
            "range": "± 46083",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15193,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5a5debceb81cb598896a2867447d1520980bc6d",
          "message": "Fix point picking picking additional untransformed ghosts, split picking method into submethods (#691)\n\n* split picking method into submethods\r\n* fix iter_vertices_and_userdata_by_batch iterating over all vertices not just current batch\r\ncaused point picking bugs\r\n* small optimization for point picking detection",
          "timestamp": "2023-01-06T21:46:13+01:00",
          "tree_id": "b6b9561cdc4cab81009cbe90f4fbb8279f2f6756",
          "url": "https://github.com/rerun-io/rerun/commit/c5a5debceb81cb598896a2867447d1520980bc6d"
        },
        "date": 1673038963110,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 285577,
            "range": "± 1471",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 731,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46208,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 876711968,
            "range": "± 3913013",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 381386,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89358563,
            "range": "± 441085",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10948,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22604446,
            "range": "± 197225",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7217,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4304800,
            "range": "± 47764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10637516,
            "range": "± 393957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14881948,
            "range": "± 417572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35509547,
            "range": "± 548600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47918958,
            "range": "± 733434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126076374,
            "range": "± 1161346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150582309,
            "range": "± 451571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325005311,
            "range": "± 1385540",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176498360,
            "range": "± 733430",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68597347,
            "range": "± 793070",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241896863,
            "range": "± 1488387",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3572,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 392844,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398686,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 741982,
            "range": "± 3472",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322769,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6165,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354591,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704996,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348470,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2160,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353772,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5961723750,
            "range": "± 11445037",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1613903,
            "range": "± 64771",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2576184,
            "range": "± 9642",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15283,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea77144650e73a839e3ccac9193b72307f26ead",
          "message": "Track whether a datapath is a classic Field or an arrow Component (#700)",
          "timestamp": "2023-01-09T10:59:26+01:00",
          "tree_id": "0bad101c52785ad47209559eeddf2bde84655927",
          "url": "https://github.com/rerun-io/rerun/commit/0ea77144650e73a839e3ccac9193b72307f26ead"
        },
        "date": 1673259154001,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 282607,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 728,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45907,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1008097584,
            "range": "± 6665243",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 364224,
            "range": "± 3973",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 100568684,
            "range": "± 752253",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10990,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23635440,
            "range": "± 156426",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7191,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4459312,
            "range": "± 276793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12912288,
            "range": "± 835169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17253906,
            "range": "± 1124216",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38593236,
            "range": "± 686380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53655395,
            "range": "± 690986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139967896,
            "range": "± 1487209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166927005,
            "range": "± 1601347",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363586385,
            "range": "± 2293298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189855548,
            "range": "± 1017139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81481306,
            "range": "± 1344182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265105304,
            "range": "± 2626940",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3553,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418082,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425588,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734435,
            "range": "± 1056",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 314340,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6358,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370148,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713255,
            "range": "± 2204",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346335,
            "range": "± 1859",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2147,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357272,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7028604065,
            "range": "± 17796984",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1646383,
            "range": "± 17304",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2606003,
            "range": "± 8746",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15300,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4d50619584cd78bd8d3f99a34d489aa20d7a08e",
          "message": "Better orbitcamera indicator (#690)\n\n* camera orbit indicator is now 3 crossing lines\r\n* notes on how the orbit center could be nicer",
          "timestamp": "2023-01-09T11:33:16+01:00",
          "tree_id": "3a85e5d8593e1f1a6b57b802015b2bac3f0fd714",
          "url": "https://github.com/rerun-io/rerun/commit/a4d50619584cd78bd8d3f99a34d489aa20d7a08e"
        },
        "date": 1673261140224,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280615,
            "range": "± 3536",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 720,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46467,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 858417270,
            "range": "± 4092048",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 371669,
            "range": "± 2617",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 90134417,
            "range": "± 340700",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11046,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23022025,
            "range": "± 134155",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7212,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4612667,
            "range": "± 297990",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12675301,
            "range": "± 504336",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16915424,
            "range": "± 1094519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37477757,
            "range": "± 450690",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49103268,
            "range": "± 423020",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126434629,
            "range": "± 1069825",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153098007,
            "range": "± 1385126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328889065,
            "range": "± 2623273",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180569564,
            "range": "± 857703",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71054246,
            "range": "± 986248",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243281057,
            "range": "± 1382395",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3383,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418225,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424083,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732087,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311388,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6214,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366977,
            "range": "± 1768",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706405,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350532,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2156,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353404,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5949125653,
            "range": "± 12705334",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641317,
            "range": "± 10302",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2661055,
            "range": "± 17624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15164,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54f589969570543d1d8b4a1dc6263f69fa796dd8",
          "message": "Add arrow support for point2d (#698)",
          "timestamp": "2023-01-09T11:54:12+01:00",
          "tree_id": "bcd38086d16029191974d5cee43a859a6e317eae",
          "url": "https://github.com/rerun-io/rerun/commit/54f589969570543d1d8b4a1dc6263f69fa796dd8"
        },
        "date": 1673262533477,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279351,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 729,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46144,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 856455233,
            "range": "± 4127459",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 359604,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89373582,
            "range": "± 504827",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10908,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22574620,
            "range": "± 369515",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7178,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4318545,
            "range": "± 57157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10914340,
            "range": "± 383986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15544728,
            "range": "± 645242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35886426,
            "range": "± 835065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47885275,
            "range": "± 906192",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126508041,
            "range": "± 1258635",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150584415,
            "range": "± 960363",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325885810,
            "range": "± 1873102",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177628906,
            "range": "± 1348749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68279501,
            "range": "± 920080",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243750771,
            "range": "± 1632828",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3398,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417600,
            "range": "± 3687",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 420976,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 735671,
            "range": "± 4281",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308807,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6339,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365056,
            "range": "± 2258",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701265,
            "range": "± 6863",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346554,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2143,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355169,
            "range": "± 2122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6017147256,
            "range": "± 16160506",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1579787,
            "range": "± 15932",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2579037,
            "range": "± 18535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15008,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb99993962ceb488c34ab6004d45ba264014e30d",
          "message": "Configurable auto size for points/lines per space view (#667)\n\n* re_renderer auto size is now configurable per view builder\r\n* space view can now configure their auto size for any unspecified size\r\n* refined heuristic for default world size\r\n* fix incorrect accumulated bounding box after deserialization\r\n* Fix default size label, fix serializing accum-bbox\r\n* don't show size setting if sizes are set to auto",
          "timestamp": "2023-01-09T13:45:31+01:00",
          "tree_id": "16a67920a26cac10762b8327951fb37b9c346ed4",
          "url": "https://github.com/rerun-io/rerun/commit/fb99993962ceb488c34ab6004d45ba264014e30d"
        },
        "date": 1673269117038,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277624,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 727,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46043,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 989216037,
            "range": "± 4360205",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 367664,
            "range": "± 3769",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 100287197,
            "range": "± 1020469",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11055,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23858501,
            "range": "± 89533",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7217,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5076971,
            "range": "± 633901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14413136,
            "range": "± 440881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 20570325,
            "range": "± 1518984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39580712,
            "range": "± 370063",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54697657,
            "range": "± 658195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140587368,
            "range": "± 1534578",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168998514,
            "range": "± 1767822",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 367345360,
            "range": "± 3779747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 192034077,
            "range": "± 1107865",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81775820,
            "range": "± 958846",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 269214858,
            "range": "± 2206420",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3463,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 419689,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425202,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 736992,
            "range": "± 2449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311840,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363461,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706839,
            "range": "± 2958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351788,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358556,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7127917204,
            "range": "± 46333198",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1610227,
            "range": "± 17836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666802,
            "range": "± 28132",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15150,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0f5c3f4624c572cabca487dcc3e0e19eae9868",
          "message": "updating tokio to unbreak CI (#711)",
          "timestamp": "2023-01-09T16:40:20+01:00",
          "tree_id": "6137e1dab299d7f7cdae9331f1cda784116327cf",
          "url": "https://github.com/rerun-io/rerun/commit/0e0f5c3f4624c572cabca487dcc3e0e19eae9868"
        },
        "date": 1673279559790,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 283204,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45878,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 867823226,
            "range": "± 3085935",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 373430,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89588440,
            "range": "± 652465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10993,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21995978,
            "range": "± 279196",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7229,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4277458,
            "range": "± 10482",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10976135,
            "range": "± 175038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15659058,
            "range": "± 264480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35531955,
            "range": "± 448451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45034172,
            "range": "± 1013848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124701929,
            "range": "± 1072606",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149815739,
            "range": "± 779757",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323675675,
            "range": "± 1830801",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177382471,
            "range": "± 880175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66637814,
            "range": "± 982236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239712321,
            "range": "± 1554763",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3582,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418354,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424745,
            "range": "± 2376",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732906,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311138,
            "range": "± 1389",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6337,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360834,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705825,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347876,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2142,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355677,
            "range": "± 771",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5914168611,
            "range": "± 8589176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1570132,
            "range": "± 6321",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623415,
            "range": "± 8647",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15155,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96bb1d308ec62f7d79492a88f6af6b262792958a",
          "message": "Fix new space views spawned with wrong nav mode (#692)\n\nAdditionally, \"Add new space view..\" will no longer spawn several space views at once",
          "timestamp": "2023-01-09T17:24:45+01:00",
          "tree_id": "1d15f6ebf615d489d036063810e7b1045efe64c4",
          "url": "https://github.com/rerun-io/rerun/commit/96bb1d308ec62f7d79492a88f6af6b262792958a"
        },
        "date": 1673282255529,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273954,
            "range": "± 4641",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 731,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 296,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 364,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44488,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 980091375,
            "range": "± 4363422",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 348867,
            "range": "± 5136",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 96481121,
            "range": "± 1256653",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10829,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22246534,
            "range": "± 720624",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6973,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4360652,
            "range": "± 196509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11803200,
            "range": "± 897724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15071699,
            "range": "± 747663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34887606,
            "range": "± 1555818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50179556,
            "range": "± 2669538",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135190812,
            "range": "± 1908607",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164071584,
            "range": "± 1527772",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350484900,
            "range": "± 3525060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184879993,
            "range": "± 2939873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75216688,
            "range": "± 1603199",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252873453,
            "range": "± 2843717",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3329,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 407915,
            "range": "± 5722",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 408718,
            "range": "± 5080",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 712105,
            "range": "± 10777",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 299556,
            "range": "± 4405",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6124,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361819,
            "range": "± 4445",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 685599,
            "range": "± 10155",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343936,
            "range": "± 3095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2071,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349239,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6996532891,
            "range": "± 31169062",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1553675,
            "range": "± 41454",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2681551,
            "range": "± 84152",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15016,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7fc0a33c7569ddfcfc0ddb61bf03f07578a5cf98",
          "message": "re_datastore: support timeless data (#694)\n\n* core datastructures\r\n\r\n* separate cluster comp caches........\r\n\r\n* write path\r\n\r\n* read path\r\n\r\n* the rest of the read path, and the new temporal|timeless row indices\r\n\r\n* updating latest_at test suite for expected semantics\r\n\r\n* working timeless latest_at semantics\r\n\r\n* letting the timeless-ness of range queries spread everywhere\r\n\r\n* proper timeless range semantics everywhere (holy moly that was ridiculous)\r\n\r\n* component density sanity checks\r\n\r\n* no more weird inverted semantics for low-level ranges\r\n\r\n* these two belong in core\r\n\r\n* bringing all_components to the timeless world\r\n\r\n* started implementing always-timeless autogenerated data but got cold-feet instead\r\n\r\n* changing my mind on a million things last minute, as one should do\r\n\r\n* xxx\r\n\r\n* stuff\r\n\r\n* demonstrating latest-at temporal-only edge case\r\n\r\n* ...and the fix!\r\n\r\n* dead code\r\n\r\n* cranky\r\n\r\n* impl new semantics\r\n\r\n* misc\r\n\r\n* make the intent clearer",
          "timestamp": "2023-01-10T15:04:58+01:00",
          "tree_id": "4e7bbe0adc07ae17b8a21a963b86e77cac2fb36b",
          "url": "https://github.com/rerun-io/rerun/commit/7fc0a33c7569ddfcfc0ddb61bf03f07578a5cf98"
        },
        "date": 1673360386033,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 295190,
            "range": "± 4916",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 760,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 317,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45662,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1025952640,
            "range": "± 5672830",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 398011,
            "range": "± 1350",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 108604390,
            "range": "± 715559",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10954,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23955599,
            "range": "± 283831",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7234,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4967009,
            "range": "± 255071",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13348964,
            "range": "± 603997",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17293075,
            "range": "± 730911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38356136,
            "range": "± 695316",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53925038,
            "range": "± 865526",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141338249,
            "range": "± 1258061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165549936,
            "range": "± 1155284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363780730,
            "range": "± 1782176",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191215578,
            "range": "± 945832",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 82464935,
            "range": "± 1159054",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 272371519,
            "range": "± 1732395",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3450,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418852,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 426236,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732417,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315066,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6245,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 419057,
            "range": "± 1104",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 758273,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 388044,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2140,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 392299,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7074666845,
            "range": "± 20829989",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1718330,
            "range": "± 8835",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2788688,
            "range": "± 7327",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14957,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a772ebcb5e7250d5f2bd5a8ca03daab7d909056d",
          "message": "re_datastore: timeless support for dataframe dumps (#710)\n\n* core datastructures\r\n\r\n* separate cluster comp caches........\r\n\r\n* write path\r\n\r\n* read path\r\n\r\n* the rest of the read path, and the new temporal|timeless row indices\r\n\r\n* updating latest_at test suite for expected semantics\r\n\r\n* working timeless latest_at semantics\r\n\r\n* letting the timeless-ness of range queries spread everywhere\r\n\r\n* proper timeless range semantics everywhere (holy moly that was ridiculous)\r\n\r\n* component density sanity checks\r\n\r\n* no more weird inverted semantics for low-level ranges\r\n\r\n* these two belong in core\r\n\r\n* bringing all_components to the timeless world\r\n\r\n* started implementing always-timeless autogenerated data but got cold-feet instead\r\n\r\n* changing my mind on a million things last minute, as one should do\r\n\r\n* xxx\r\n\r\n* stuff\r\n\r\n* demonstrating latest-at temporal-only edge case\r\n\r\n* ...and the fix!\r\n\r\n* dead code\r\n\r\n* cranky\r\n\r\n* making timeless indices part of DF dumps too\r\n\r\n* sort timeless first\r\n\r\n* self-review\r\n\r\n* impl new semantics\r\n\r\n* misc\r\n\r\n* make the intent clearer",
          "timestamp": "2023-01-10T15:28:27+01:00",
          "tree_id": "c65bda96ed9f91c76162886879f6489c79d3fb4d",
          "url": "https://github.com/rerun-io/rerun/commit/a772ebcb5e7250d5f2bd5a8ca03daab7d909056d"
        },
        "date": 1673361782219,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275639,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 729,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45690,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 997950036,
            "range": "± 5936319",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 376492,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 106064728,
            "range": "± 780642",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10961,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23960174,
            "range": "± 36387",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7184,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5041770,
            "range": "± 314375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14741722,
            "range": "± 180092",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 20976527,
            "range": "± 939089",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 40155296,
            "range": "± 251921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 55403304,
            "range": "± 544030",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 142521509,
            "range": "± 1402759",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170402236,
            "range": "± 976670",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 368047473,
            "range": "± 1598812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 193161103,
            "range": "± 936521",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 82846473,
            "range": "± 1016661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 269827113,
            "range": "± 1708774",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3374,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418964,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425402,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734552,
            "range": "± 7781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315217,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6316,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 373486,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717003,
            "range": "± 2149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353571,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2153,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359343,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7204600959,
            "range": "± 26744216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1726378,
            "range": "± 15291",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619387,
            "range": "± 28043",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14937,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "533466b5be663a65f6e20765ef7684ce7987255e",
          "message": "re_query: timeless support (#709)\n\n* core datastructures\r\n\r\n* separate cluster comp caches........\r\n\r\n* write path\r\n\r\n* read path\r\n\r\n* the rest of the read path, and the new temporal|timeless row indices\r\n\r\n* updating latest_at test suite for expected semantics\r\n\r\n* working timeless latest_at semantics\r\n\r\n* letting the timeless-ness of range queries spread everywhere\r\n\r\n* proper timeless range semantics everywhere (holy moly that was ridiculous)\r\n\r\n* component density sanity checks\r\n\r\n* no more weird inverted semantics for low-level ranges\r\n\r\n* these two belong in core\r\n\r\n* bringing all_components to the timeless world\r\n\r\n* started implementing always-timeless autogenerated data but got cold-feet instead\r\n\r\n* changing my mind on a million things last minute, as one should do\r\n\r\n* xxx\r\n\r\n* stuff\r\n\r\n* demonstrating latest-at temporal-only edge case\r\n\r\n* ...and the fix!\r\n\r\n* dead code\r\n\r\n* cranky\r\n\r\n* add a timeless query test\r\n\r\n* timeless support for range\r\n\r\n* making timeless indices part of DF dumps too\r\n\r\n* sort timeless first\r\n\r\n* self-review\r\n\r\n* add timeless range test\r\n\r\n* clearer to just merge them really\r\n\r\n* impl new semantics\r\n\r\n* misc\r\n\r\n* impl new semantics\r\n\r\n* infinite range test\r\n\r\n* make the intent clearer\r\n\r\n* make the intent clearer",
          "timestamp": "2023-01-10T15:46:58+01:00",
          "tree_id": "3ac42b45c9bce29ecc40316370142c3ee3f2d937",
          "url": "https://github.com/rerun-io/rerun/commit/533466b5be663a65f6e20765ef7684ce7987255e"
        },
        "date": 1673362944215,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276707,
            "range": "± 5808",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 740,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45107,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 996055379,
            "range": "± 3069640",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 368568,
            "range": "± 1501",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102790605,
            "range": "± 952791",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10856,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22415377,
            "range": "± 366271",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7176,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4278739,
            "range": "± 67062",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11473717,
            "range": "± 534851",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16719256,
            "range": "± 567203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36096167,
            "range": "± 941081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47911979,
            "range": "± 1416754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137086721,
            "range": "± 1384956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162845648,
            "range": "± 755857",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354249598,
            "range": "± 1904118",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183734621,
            "range": "± 1318151",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79657139,
            "range": "± 1756790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259638671,
            "range": "± 2020685",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3459,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 414299,
            "range": "± 3472",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 420428,
            "range": "± 4271",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726495,
            "range": "± 5865",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308634,
            "range": "± 2240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6229,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360793,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 703600,
            "range": "± 5588",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345217,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2162,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351758,
            "range": "± 2401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6913565152,
            "range": "± 14100953",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1632674,
            "range": "± 12727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2583649,
            "range": "± 11725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14836,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0604ead6f52bc89c90cc9ac35fe6a06cf45c436d",
          "message": "Filter visible objects consistently for arrow (#716)\n\nConsolidate into SceneQuery::iter_entities and remove redundant plumbing of ObjectProperties.",
          "timestamp": "2023-01-10T16:09:10+01:00",
          "tree_id": "b2f6d4771a950cb5f9d8964fe1ad0f8c3dea18db",
          "url": "https://github.com/rerun-io/rerun/commit/0604ead6f52bc89c90cc9ac35fe6a06cf45c436d"
        },
        "date": 1673364138820,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275310,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 730,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 374,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44900,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1006356825,
            "range": "± 4431536",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357615,
            "range": "± 2851",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102848998,
            "range": "± 813803",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10889,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22523711,
            "range": "± 348755",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7094,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4198567,
            "range": "± 19856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11132769,
            "range": "± 333452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16976641,
            "range": "± 1045137",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36142661,
            "range": "± 925599",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48725831,
            "range": "± 1455065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137568173,
            "range": "± 1367809",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162035335,
            "range": "± 782010",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354454018,
            "range": "± 1989770",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187634898,
            "range": "± 1864048",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 78083112,
            "range": "± 1333182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260127210,
            "range": "± 2213095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3318,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 414142,
            "range": "± 2960",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 420234,
            "range": "± 3462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 723930,
            "range": "± 5851",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 307704,
            "range": "± 2906",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6177,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360620,
            "range": "± 2494",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697278,
            "range": "± 4530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347768,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2128,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352483,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7175870196,
            "range": "± 9371619",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1637102,
            "range": "± 15359",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2582678,
            "range": "± 15137",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14885,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56dbfed5ba35a7ea019dd99d7391defdc69111e4",
          "message": "Remove the glam dependency from focal_length_in_pixels (#726)",
          "timestamp": "2023-01-11T00:19:30+01:00",
          "tree_id": "bad2db9e86b57f45eebaf942ed0e0b6b9b49aabf",
          "url": "https://github.com/rerun-io/rerun/commit/56dbfed5ba35a7ea019dd99d7391defdc69111e4"
        },
        "date": 1673393731639,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276696,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 722,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45350,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 997929662,
            "range": "± 6757435",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369846,
            "range": "± 3825",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 104633243,
            "range": "± 688442",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10914,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23378807,
            "range": "± 390322",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7204,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4252612,
            "range": "± 172978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12149268,
            "range": "± 849231",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16800605,
            "range": "± 1185381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37011439,
            "range": "± 1094081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52332126,
            "range": "± 896022",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140656703,
            "range": "± 1370329",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163127531,
            "range": "± 1175991",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357566611,
            "range": "± 1979938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188705388,
            "range": "± 2062174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80717411,
            "range": "± 918762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262681614,
            "range": "± 1842384",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3385,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418236,
            "range": "± 1867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423804,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 733606,
            "range": "± 2586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308609,
            "range": "± 1880",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6309,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365360,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713958,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349831,
            "range": "± 1366",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2176,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356850,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7048514456,
            "range": "± 17409323",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1667920,
            "range": "± 23045",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2628156,
            "range": "± 20079",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14808,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3fc9ad34c396797136e5a7e489124088460d72e",
          "message": "Python support for linestrips for log_path (#725)\n\n* Python support for linestrips for log_path",
          "timestamp": "2023-01-11T10:22:32+01:00",
          "tree_id": "4f69eeeddf9ab184c400cf7c8255940ed3905763",
          "url": "https://github.com/rerun-io/rerun/commit/e3fc9ad34c396797136e5a7e489124088460d72e"
        },
        "date": 1673429893691,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274581,
            "range": "± 2202",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 730,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45150,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 982028620,
            "range": "± 4868762",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 351567,
            "range": "± 2449",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 101775780,
            "range": "± 699815",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10915,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23057135,
            "range": "± 301249",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7221,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4293311,
            "range": "± 95744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11076508,
            "range": "± 504175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15225616,
            "range": "± 403361",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35439424,
            "range": "± 982869",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48776940,
            "range": "± 1612259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136294535,
            "range": "± 1594944",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163709852,
            "range": "± 915671",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354142741,
            "range": "± 2167419",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186051415,
            "range": "± 1344195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77190683,
            "range": "± 1261130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259255054,
            "range": "± 2507793",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3476,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 415391,
            "range": "± 3257",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 421024,
            "range": "± 2999",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732454,
            "range": "± 4735",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 307409,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6356,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364088,
            "range": "± 2343",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 700337,
            "range": "± 3779",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348634,
            "range": "± 1499",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358058,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6773447256,
            "range": "± 19808943",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1636658,
            "range": "± 13202",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2568361,
            "range": "± 12800",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14884,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d106132cc42d68373e754074620a510555aa7784",
          "message": "Fix loading images twice (#730)\n\n* image cache now always expects annotations, eliminating duplicated image loading for loading with `None` versus `missing annotation`\r\n* remove some unnecessary annotation context clones",
          "timestamp": "2023-01-11T12:56:31+01:00",
          "tree_id": "da58f9c108b689d49068f9d81eb785aab973c4ea",
          "url": "https://github.com/rerun-io/rerun/commit/d106132cc42d68373e754074620a510555aa7784"
        },
        "date": 1673438939055,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276090,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45931,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 841574864,
            "range": "± 3229842",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354526,
            "range": "± 2261",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94807032,
            "range": "± 692679",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10931,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22831540,
            "range": "± 230713",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7214,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4459845,
            "range": "± 223049",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12615602,
            "range": "± 570390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17192910,
            "range": "± 1011017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37685096,
            "range": "± 620281",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49516062,
            "range": "± 645034",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127035662,
            "range": "± 1119362",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153494928,
            "range": "± 1074456",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 330521886,
            "range": "± 1899687",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177443527,
            "range": "± 785483",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70808561,
            "range": "± 823665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242908353,
            "range": "± 1519264",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3436,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417277,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423104,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732235,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308739,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6306,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362674,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709118,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348530,
            "range": "± 1636",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2189,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355234,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5991288492,
            "range": "± 11239066",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1658836,
            "range": "± 12676",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2665921,
            "range": "± 8684",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14925,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c38d807cf34e8c18bf92787a2fe488d5c96b668",
          "message": "Data Blueprint Groups (#724)\n\n* add data structure for data-blueprint groups\r\n* data blueprint has now all object properties and handles property propagation\r\n* auto collapse any group with 4 elements or more",
          "timestamp": "2023-01-11T14:18:30+01:00",
          "tree_id": "6a08726fccb96cdf5a46c667134db51da5c87b60",
          "url": "https://github.com/rerun-io/rerun/commit/9c38d807cf34e8c18bf92787a2fe488d5c96b668"
        },
        "date": 1673443885861,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279780,
            "range": "± 1366",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 727,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45675,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 936752235,
            "range": "± 7929254",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 372192,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 101396303,
            "range": "± 783902",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10941,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23479597,
            "range": "± 172449",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7231,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4738128,
            "range": "± 283326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13478970,
            "range": "± 677068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18879792,
            "range": "± 985378",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38446680,
            "range": "± 448272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52304726,
            "range": "± 608178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135732535,
            "range": "± 1557339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165568478,
            "range": "± 1422715",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354396650,
            "range": "± 2729485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186351607,
            "range": "± 805598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77304776,
            "range": "± 912328",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259191820,
            "range": "± 1778697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3411,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417770,
            "range": "± 815",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424386,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734706,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308746,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6289,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364791,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705616,
            "range": "± 3453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350684,
            "range": "± 1784",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2135,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359675,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6721605431,
            "range": "± 214733810",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1706100,
            "range": "± 77776",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2698607,
            "range": "± 277324",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14920,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a714c4acd40e532c683e971941b8c6e87f13b4b",
          "message": "Add Lines3dPart to the Spatial Scene for Arrow Lines (#728)\n\n* Lines3DPart->Lines3DPartClassic\r\n* Add the Line3D ScenPart",
          "timestamp": "2023-01-11T16:55:21+01:00",
          "tree_id": "18e28080708f2d3416e62c1b653b4d1841013d3d",
          "url": "https://github.com/rerun-io/rerun/commit/2a714c4acd40e532c683e971941b8c6e87f13b4b"
        },
        "date": 1673453290109,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274018,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 720,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45470,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 927694423,
            "range": "± 5849035",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 370302,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 103061828,
            "range": "± 840789",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10998,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23479508,
            "range": "± 224572",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7231,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4792137,
            "range": "± 233209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12429932,
            "range": "± 489283",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15804702,
            "range": "± 795797",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38678370,
            "range": "± 678153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52834647,
            "range": "± 1161462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136395261,
            "range": "± 1179023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164129825,
            "range": "± 2560819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357604191,
            "range": "± 1750826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187687549,
            "range": "± 945558",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76879790,
            "range": "± 1100281",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258230645,
            "range": "± 1719474",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3578,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417319,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423770,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 735706,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 307956,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6333,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366469,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707565,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351491,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2123,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351716,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6739228901,
            "range": "± 12616762",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1657099,
            "range": "± 12711",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586894,
            "range": "± 11290",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14839,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a31e3ae2206841770412fdcad3d0a48bf740fb3",
          "message": "re_datastore: make autogenerated cluster keys always timeless (#720)\n\n* 63bits RowIndex\r\n\r\n* always-timeless generated cluster components\r\n\r\n* self-review\r\n\r\n* to_dataframe() fixes for new row indices",
          "timestamp": "2023-01-11T19:13:39+01:00",
          "tree_id": "f5de78d13125c237457df62e9e89c12b87523593",
          "url": "https://github.com/rerun-io/rerun/commit/6a31e3ae2206841770412fdcad3d0a48bf740fb3"
        },
        "date": 1673461675216,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280967,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45193,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 848944741,
            "range": "± 3787779",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 377260,
            "range": "± 1091",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95329227,
            "range": "± 592224",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10968,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22194781,
            "range": "± 209709",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7241,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4316660,
            "range": "± 15984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10857029,
            "range": "± 150248",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15008830,
            "range": "± 277098",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35544684,
            "range": "± 462414",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45464569,
            "range": "± 820174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125709439,
            "range": "± 1143207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151970889,
            "range": "± 712674",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328160592,
            "range": "± 1804818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176779717,
            "range": "± 833754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68782405,
            "range": "± 985267",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241176050,
            "range": "± 1652451",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3580,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417752,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423306,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731647,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 313507,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6393,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364266,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702861,
            "range": "± 6309",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350256,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2158,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358107,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6052338896,
            "range": "± 49218554",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1634575,
            "range": "± 7799",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625207,
            "range": "± 9280",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14297,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}