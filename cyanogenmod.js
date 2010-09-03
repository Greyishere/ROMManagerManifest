{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    homepage: "http://www.cyanogenmod.com/",
    donate: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3283920",
    mirrors:
    [
    "http://droidk.macleod-web.net/",
    "http://android.antbox.org/koush/",
    "http://www.thekilpatrickproject.com/downloads/koush/",
    "http://www.clockworkmod.com/download/",
    "http://koush.tandtgaming.com/",
    "http://koush.droid.co"
    ],

    // Your list of ROMs
    roms:
    [
    // =====HTC Incredible=====
    {
        name: "CyanogenMod 6.0.2",
        summary: "Stable Release",
        device: "inc",
        product: "CyanogenMod",
        incremental: 6020,
        modversion: "CyanogenMod-6.0.2-Inc",
        file: "htc/inc/update-cm-6.0.2-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.1",
        summary: "Stable Release",
        device: "inc",
        product: "CyanogenMod",
        incremental: 6010,
        modversion: "CyanogenMod-6.0.1-Inc",
        file: "htc/inc/update-cm-6.0.1-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "inc",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Inc",
        file: "htc/inc/update-cm-6.0.0-Inc-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "inc",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Inc-RC3",
        file: "htc/inc/update-cm-6.0.0-Inc-RC3-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },

    // =====Motorola Droid=====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Droid",
        url: "http://mirror.kanged.net/cm/stable/droid/update-cm-6.0.0-Droid-signed.zip",
        choices:
        [
        {
            name: "Home Application",
            options:
            [
            {
                name: "ADWLauncher",
                url: ""
            },
            {
                name: "Launcher2",
                file: "common/Launcher2-CM6-v1.zip"
            }
            ]
        }
        ],
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Droid-RC3",
        file: "motorola/sholes/update-cm-6.0.0-Droid-RC3-signed.zip",
        choices:
        [
        {
            name: "Home Application",
            options:
            [
            {
                name: "ADWLauncher",
                url: ""
            },
            {
                name: "Launcher2",
                file: "common/Launcher2-CM6-v1.zip"
            }
            ]
        }
        ],
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Droid-RC2",
        visible: false
    },
    {
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Droid-RC1",
        visible: false
    },

    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable",
        device: "sholes",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-Droid",
        file: "motorola/sholes/update-cm-5.0.8-Droid-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            file: "common/gapps-passion-EPF30-signed.zip"
        }
        ]
    },

    {
        name: "bekit Kernels (0.8.4)",
        developer: true,
        summary: "Custom Clocked Kernels for CyanogenMod-5. For Advanced users only.",
        device: "sholes",
        urls:
        [
        ""
        ],
        choices:
        [
        {
            name: "Kernel",
            options:
            [
            {
                name: "Stock (Default) 0.8.4",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-stock.zip"
                ]
            },
            {
                name: "5 Slot 800MHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x800SV.zip"
                ]
            },
            {
                name: "5 Slot 1.0GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1000SV.zip"
                ]
            },
            {
                name: "5 Slot 1.1GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1100SV.zip"
                ]
            },
            {
                name: "5 Slot 1.2GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1200SV.zip"
                ]
            },
            {
                name: "7 Slot 800MHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x800SV.zip"
                ]
            },
            {
                name: "7 Slot 1.0GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1000SV.zip"
                ]
            },
            {
                name: "7 Slot 1.1GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1100SV.zip"
                ]
            },
            {
                name: "7 Slot 1.2GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1200SV.zip"
                ]
            },
            {
                name: "7 Slot 1.3GHz 0.8.4 *Standard Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1300SV.zip"
                ]
            },
            {
                name: "5 Slot 800MHz 0.8.4	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x800LV.zip"
                ]
            },
            {
                name: "5 Slot 1.0GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1000LV.zip"
                ]
            },
            {
                name: "5 Slot 1.1GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1100LV.zip"
                ]
            },
            {
                name: "5 Slot 1.2GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-5x1200LV.zip"
                ]
            },
            {
                name: "7 Slot 800MHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x800LV.zip"
                ]
            },
            {
                name: "7 Slot 1.0GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1000LV.zip"
                ]
            },
            {
                name: "7 Slot 1.1GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1100LV.zip"
                ]
            },
            {
                name: "7 Slot 1.2GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1200LV.zip"
                ]
            },
            {
                name: "7 Slot 1.3GHz 0.8.4 	*Low Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1300LV.zip"
                ]
            },
            {
                name: "7 Slot 1.1GHz 0.8.4 *Increased Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1100IV.zip"
                ]
            },
            {
                name: "7 Slot 1.2GHz 0.8.4 *Increased Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1200IV.zip"
                ]
            },
            {
                name: "7 Slot 1.3GHz 0.8.4 *Increased Voltage*",
                urls:
                [
                "http://dropbox.bekit.net/Android/bekit_kernels/0.8/bekit_boot-0.8.4-7x1300IV.zip"
                ]
            }
            ]
        }
        ]
    },

    {
        name: "P3Droid Kernels",
        developer: true,
        summary: "Kernels for any ECLAIR rom, using AnyUpdater from Koush by P3Droid. For Advanced users only.",
        device: "sholes",
        urls:
        [
        ""
        ],
        choices:
        [
        {
            name: "7 Slot - Low Voltage",
            options:
            [
            {
                name: "600 - 250/300/400/450/500/550/600",
                urls:
                [
                "http://www.p3designs.info/kernels/600_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "700 - 250/400/500/550/600/650/700",
                urls:
                [
                "http://www.p3designs.info/kernels/700_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "800 - 250/400/500/550/600/700/800",
                urls:
                [
                "http://www.p3designs.info/kernels/800_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "900 - 250/400/500/600/700/800/900",
                urls:
                [
                "http://www.p3designs.info/kernels/900_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1000 - 250/500/600/700/800/900/1000",
                urls:
                [
                "http://www.p3designs.info/kernels/1000_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1100 - 250/500/600/700/900/1000/1100",
                urls:
                [
                "http://www.p3designs.info/kernels/1100_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1200 - 250/500/600/700/1000/1100/1200",
                urls:
                [
                "http://www.p3designs.info/kernels/1200_LV_Wi_USB_Tether.zip"
                ]
            },
            {
                name: "1250 - 250/500/600/800/1100/1200/1250",
                urls:
                [
                "http://www.p3designs.info/kernels/1250_LV_Wi_USB_Tether.zip"
                ]
            }
            ]
        }
        ]
    },

    // =====HTC cc (EVO 4G)====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Supersonic",
        url: "http://mirror.kanged.net/cm/stable/supersonic/update-cm-6.0.0-Supersonic-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "supersonic",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Supersonic-RC2",
        url: "http://mirror.kanged.net/cm/stable/supersonic/testing/update-cm-6.0.0-Supersonic-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },

    // =====Google Nexus One====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "passion",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-N1",
        url: "http://mirror.kanged.net/cm/stable/nexus/update-cm-6.0.0-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "passion",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-N1-RC3",
        url: "http://mirror.kanged.net/cm/stable/nexus/testing/update-cm-6.0.0-N1-RC3-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "passion",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-N1-RC2",
        url: "http://mirror.kanged.net/cm/stable/nexus/testing/update-cm-6.0.0-N1-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable",
        device: "passion",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-N1",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        url: "http://n0rp.chemlab.org/android/nexus/update-cm-5.0.8-N1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://briancrook.ca/android/nexus/gapps/gapps-passion-EPF30-signed.zip"
        }
        ]
    },

    // =====G1=====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "dream",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS",
        urls:
        [
        "http://mirror.kanged.net/cm/stable/update-cm-6.0.0-DS-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-tiny-20100816-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "dream",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC3",
        urls:
        [
        "http://mirror.kanged.net/cm/stable/testing/update-cm-6.0.0-DS-RC3-signed.zip"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-tiny-20100816-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "dream",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC2",
        url: "http://mirror.kanged.net/cm/stable/testing/update-cm-6.0.0-DS-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-tiny-20100816-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable, Flashing Recovery may be broken",
        device: "dream",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-DS",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        url: "http://n0rp.chemlab.org/android/update-cm-5.0.8-DS-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "/common/gapps-ds-ERE36B-signed.zip"
        }
        ]
    },

    // =====32B=====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-DS",
        url: "http://mirror.kanged.net/cm/stable/update-cm-6.0.0-DS-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-tiny-20100816-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC3",
        summary: "Release Candidate 3",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC3",
        url: "http://mirror.kanged.net/cm/stable/testing/update-cm-6.0.0-DS-RC3-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-tiny-20100816-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-DS-RC2",
        url: "http://mirror.kanged.net/cm/stable/testing/update-cm-6.0.0-DS-RC2-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.kanged.net/mirror/download.php?file=gapps-mdpi-FRF91-3-signed.zip"
        }
        ]
    },

    {
        name: "CyanogenMod 5.0.8",
        summary: "Stable, Flashing Recovery may be broken",
        device: "sapphire",
        product: "CyanogenMod",
        incremental: 5080,
        modversion: "CyanogenMod-5.0.8-DS",
        screenshots:
        [
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
        "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        url: "http://n0rp.chemlab.org/android/update-cm-5.0.8-DS-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            file: "/common/gapps-ds-ERE36B-signed.zip"
        }
        ]
    },

    // ===== Bravo =====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Bravo",
        url: "http://mirror.jeago.com/bravo/stable/update-cm-6.0.0-Desire-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC2",
        summary: "Release Candidate 2",
        device: "bravo",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Bravo-RC2",
        url: "http://mirror.jeago.com/bravo/testing/update-cm-6.0.0-Desire-RC2-signed.zip",
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        addons:
        [
        {
            name: "Google Apps",
            url: "http://www.tap3w0rm.com/hosted/android/nexus-1/gapps-hdpi-20100817-signed.zip"
        }
        ]
    },

    // ===== T-Mobile MyTouch Slide (espresso) ====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Slide",
        url: "http://mirror.kanged.net/cm/stable/espresso/update-cm-6.0.0-Slide-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-20100816-signed.zip"
        }
        ]
    },
    {
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Release Candidate 1",
        device: "espresso",
        product: "CyanogenMod",
        incremental: 0,
        modversion: "CyanogenMod-6.0.0-Slide-RC1",
        url: "http://mirror.kanged.net/cm/stable/espresso/testing/update-cm-6.0.0-Slide-RC1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-20100816-signed.zip"
        }
        ]
    },

    // ===== Sprint Hero (heroc) ====
    {
        name: "CyanogenMod 6.0.0-RC1",
        summary: "Release Candidate 1",
        device: "heroc",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-Heroc-RC1",
        url: "http://darchroms.pocketdevelopers.com/cm/update-cm-6.0.0-Heroc-RC1-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-20100816-signed.zip"
        }
        ]
    },

    // ===== HTC Aria (liberty) ====
    {
        name: "CyanogenMod 6.0.0",
        summary: "Stable Release",
        device: "liberty",
        product: "CyanogenMod",
        incremental: 6000,
        modversion: "CyanogenMod-6.0.0-liberty",
        url: "http://mirror.jeago.com/aria/CyanogenMod-6.0.0-liberty-signed.zip",
        addons:
        [
        {
            name: "Google Apps",
            url: "http://mirror.kanged.net/gapps/gapps-mdpi-20100816-signed.zip"
        }
        ]
    },

    // ==== Google Apps ====
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "passion",
        url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
    },
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "sholes",
        url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
    },
    {
        name: "Google Apps (Froyo)",
        summary: "Google Add-On",
        device: "inc",
        url: "http://mirror.kanged.net/gapps/gapps-hdpi-20100817-signed.zip"
    },

    {
        name: "Google Apps (Eclair)",
        summary: "Google Add-On",
        device: "passion",
        file: "common/gapps-passion-EPF30-signed.zip"
    },
    {
        name: "Google Apps (Eclair)",
        summary: "Google Add-On",
        device: "sholes",
        file: "common/gapps-passion-EPF30-signed.zip"
    },
    {
        name: "Google Apps (Eclair)",
        summary: "Google Add-On",
        device: "inc",
        file: "common/gapps-passion-EPF30-signed.zip"
    }
    ]
}
