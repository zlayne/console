/* Copyright Contributors to the Open Cluster Management project */
export const DrawerShapes = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="0" height="0">
        <symbol viewBox="0 0 16 16" id="drawerShapes_checkmark">
            <circle cx="8" cy="8" r="8" fill="white" fillOpacity="1" />
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z" />
        </symbol>
        <symbol viewBox="6 6 28 28" id="drawerShapes_failure">
            <g transform="scale(1.68)">
                <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
                <path
                    d="M12,19 C15.8669355,19 19,15.8669355 19,12 C19,8.13306452 15.8669355,5 12,5 C8.13306452,5 5,8.13306452 5,12 C5,15.8669355 8.13306452,19 12,19 Z M9.68267232,15.432247 L8.56775296,14.3145161 C8.43508616,14.1818493 8.43508616,13.9673442 8.56775296,13.8346774 L10.4193548,12 L8.56775296,10.162511 C8.43508616,10.0298442 8.43508616,9.81531155 8.56775296,9.68267232 L9.68548387,8.56491384 C9.81815067,8.43224704 10.0326558,8.43224704 10.1653226,8.56491384 L12,10.4193548 L13.837489,8.56775296 C13.9701558,8.43508616 14.1846884,8.43508616 14.3173277,8.56775296 L15.4350862,9.68548387 C15.567753,9.81815067 15.567753,10.0326558 15.4350862,10.1653226 L13.5806452,12 L15.432247,13.837489 C15.5649138,13.9701558 15.5649138,14.1846884 15.432247,14.3173277 L14.3145161,15.432247 C14.1818493,15.5649138 13.9673442,15.5649138 13.8346774,15.432247 L12,13.5806452 L10.162511,15.432247 C10.0298442,15.5649138 9.81531155,15.5649138 9.68267232,15.432247 Z"
                    id="times-circle"
                    fill="#C9190B"
                ></path>
            </g>
        </symbol>
        <symbol viewBox="6 6 28 28" id="drawerShapes_warning">
            <g transform="scale(1.68)">
                <g id="Topology" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Artboard" transform="translate(-1474.000000, -1386.000000)">
                        <g id="DeployWarning" transform="translate(1474.000000, 1386.000000)">
                            <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
                            <g
                                id="Icons-/-14px-/-exclamation-triangle"
                                transform="translate(5.000000, 5.000000)"
                                fill="#F0AB00"
                            >
                                <path
                                    d="M13.8584965,10.7072806 C13.9882079,10.9667038 14.0287429,11.2301802 13.9801011,11.4977102 C13.9314593,11.7652402 13.8017479,11.9922352 13.5909665,12.1786956 C13.3801852,12.3651561 13.1288693,12.4583861 12.8370183,12.4583861 L1.16298166,12.4583861 C0.871130747,12.4583861 0.619814803,12.3651561 0.409033462,12.1786956 C0.19825212,11.9922352 0.0685407255,11.7652402 0.0198989061,11.4977102 C-0.0287429134,11.2301802 0.0117920599,10.9667038 0.141503455,10.7072806 L5.97852179,0.589782154 C6.12444725,0.330358993 6.33117498,0.156059387 6.59870499,0.0668825945 C6.866235,-0.0222941982 7.133765,-0.0222941982 7.40129501,0.0668825945 C7.66882502,0.156059387 7.87555275,0.330358993 8.02147821,0.589782154 L13.8584965,10.7072806 Z M7,8.61568237 C6.69193502,8.61568237 6.42845862,8.72512646 6.20957043,8.94401465 C5.99068225,9.16290284 5.88123815,9.42637923 5.88123815,9.73444421 C5.88123815,10.0425092 5.99068225,10.3059856 6.20957043,10.5248738 C6.42845862,10.743762 6.69193502,10.8532061 7,10.8532061 C7.30806498,10.8532061 7.57154138,10.743762 7.79042957,10.5248738 C8.00931775,10.3059856 8.11876185,10.0425092 8.11876185,9.73444421 C8.11876185,9.42637923 8.00931775,9.16290284 7.79042957,8.94401465 C7.57154138,8.72512646 7.30806498,8.61568237 7,8.61568237 Z M5.92987997,4.60273226 L6.12444725,7.91037598 C6.12444725,7.97523187 6.15282177,8.03603414 6.20957043,8.09278281 C6.2663191,8.14953147 6.33522859,8.17790599 6.41629817,8.17790599 L7.58370183,8.17790599 C7.66477141,8.17790599 7.7336809,8.14953147 7.79042957,8.09278281 C7.84717823,8.03603414 7.87555275,7.97523187 7.87555275,7.91037598 L8.07012003,4.60273226 C8.07012003,4.50544862 8.04174551,4.42843228 7.98499684,4.37168362 C7.92824818,4.31493495 7.85933869,4.28656043 7.77826911,4.28656043 L6.22173089,4.28656043 C6.14066131,4.28656043 6.07175182,4.31493495 6.01500316,4.37168362 C5.95825449,4.42843228 5.92987997,4.50544862 5.92987997,4.60273226 Z"
                                    id="exclamation-triangle"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </symbol>
        <symbol viewBox="4 4 16 16" id="diagramIcons_pending">
            <g id="Applications" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="2.1-App-9" transform="translate(-1151.000000, -1345.000000)">
                    <g id="Group-3" transform="translate(72.000000, 579.000000)">
                        <g id="Group-20-Copy-2" transform="translate(1079.000000, 766.000000)">
                            <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
                            <g
                                id="Icons/1.-Size-md-(16px)/Status/pficon-in-progress"
                                transform="translate(6.000000, 6.000000)"
                            >
                                <path
                                    d="M5.9941349,12 C6.40860215,12 6.80938416,11.9609375 7.19648094,11.8828125 C7.58357771,11.8046875 7.96089932,11.6875 8.32844575,11.53125 C8.68817204,11.375 9.028348,11.1894531 9.34897361,10.9746094 C9.66959922,10.7597656 9.96285435,10.515625 10.228739,10.2421875 C10.5024438,9.96875 10.7468231,9.67382812 10.9618768,9.35742188 C11.1769306,9.04101562 11.3626588,8.69921875 11.5190616,8.33203125 C11.6832845,7.97265625 11.8044966,7.59765625 11.8826979,7.20703125 C11.9608993,6.81640625 12,6.4140625 12,6 C12,5.5859375 11.9608993,5.18554688 11.8826979,4.79882812 C11.8044966,4.41210938 11.6832845,4.03515625 11.5190616,3.66796875 C11.3626588,3.30859375 11.1769306,2.96875 10.9618768,2.6484375 C10.7468231,2.328125 10.5024438,2.03515625 10.228739,1.76953125 C9.96285435,1.49609375 9.66959922,1.25195312 9.34897361,1.03710938 C9.028348,0.822265625 8.68817204,0.63671875 8.32844575,0.48046875 C7.96089932,0.31640625 7.58357771,0.1953125 7.19648094,0.1171875 C6.80938416,0.0390625 6.40860215,0 5.9941349,0 L5.9941349,1.6171875 C6.2913001,1.625 6.58064516,1.65625 6.86217009,1.7109375 C7.14369501,1.765625 7.4173998,1.8515625 7.68328446,1.96875 C7.94916911,2.0859375 8.19745846,2.22265625 8.42815249,2.37890625 C8.65884653,2.53515625 8.87585533,2.71484375 9.07917889,2.91796875 C9.28250244,3.12109375 9.46236559,3.33789062 9.61876833,3.56835938 C9.77517107,3.79882812 9.91202346,4.046875 10.0293255,4.3125 C10.1466276,4.5859375 10.2346041,4.86523438 10.2932551,5.15039062 C10.3519062,5.43554688 10.3812317,5.7265625 10.3812317,6.0234375 C10.3812317,6.328125 10.3519062,6.62304688 10.2932551,6.90820312 C10.2346041,7.19335938 10.1466276,7.47265625 10.0293255,7.74609375 C9.91202346,8.01171875 9.77517107,8.26171875 9.61876833,8.49609375 C9.46236559,8.73046875 9.28250244,8.9453125 9.07917889,9.140625 C8.87585533,9.34375 8.65884653,9.5234375 8.42815249,9.6796875 C8.19745846,9.8359375 7.94916911,9.97265625 7.68328446,10.0898438 C7.40957967,10.2070312 7.13000978,10.2929688 6.84457478,10.3476562 C6.55913978,10.4023438 6.26783969,10.4296875 5.97067449,10.4296875 C5.71260997,10.4296875 5.46432063,10.4101562 5.22580645,10.3710938 C4.98729228,10.3320312 4.75464321,10.2734375 4.52785924,10.1953125 L3.74193548,11.5664062 C4.09384164,11.7148438 4.45747801,11.8242188 4.83284457,11.8945312 C5.20821114,11.9648438 5.59530792,12 5.9941349,12 Z M0,5.578125 L1.59530792,5.47265625 C1.61876833,5.26953125 1.65591398,5.07226563 1.70674487,4.88085938 C1.75757576,4.68945313 1.82209189,4.50390625 1.90029326,4.32421875 C1.92375367,4.26953125 1.94721408,4.21679688 1.97067449,4.16601563 C1.9941349,4.11523438 2.02150538,4.0625 2.05278592,4.0078125 L0.633431085,3.3046875 C0.602150538,3.359375 0.572825024,3.41796875 0.545454545,3.48046875 C0.518084066,3.54296875 0.492668622,3.60546875 0.469208211,3.66796875 C0.336265885,3.97265625 0.230694037,4.28320313 0.152492669,4.59960938 C0.0742913001,4.91601563 0.0234604106,5.2421875 0,5.578125 Z M2.26392962,10.6992188 L3.04985337,9.328125 C3.01857283,9.296875 2.98533724,9.26757813 2.95014663,9.24023438 C2.91495601,9.21289063 2.88172043,9.18359375 2.85043988,9.15234375 C2.65493646,8.94921875 2.47702835,8.73046875 2.31671554,8.49609375 C2.15640274,8.26171875 2.01759531,8.01171875 1.90029326,7.74609375 C1.86119257,7.65234375 1.82600196,7.55859375 1.79472141,7.46484375 C1.76344086,7.37109375 1.73607038,7.27734375 1.71260997,7.18359375 L0.129032258,7.2890625 C0.168132942,7.46875 0.215053763,7.64648438 0.269794721,7.82226563 C0.324535679,7.99804688 0.391006843,8.16796875 0.469208211,8.33203125 C0.625610948,8.69921875 0.811339198,9.04101563 1.02639296,9.35742188 C1.24144673,9.67382813 1.485826,9.96875 1.75953079,10.2421875 C1.83773216,10.328125 1.91788856,10.4082031 2,10.4824219 C2.08211144,10.5566406 2.17008798,10.6289063 2.26392962,10.6992188 Z"
                                    id="pficon-in-progress"
                                    fill="#151515"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </symbol>
        <symbol viewBox="0 0 16 16" id="drawerShapes_carbonLaunch">
            <g id="launch" fill="#3D70B2">
                <path id="Combined-Shape" d="M14.3,1h-3.8V0H16v5.5h-1V1.7L9.7,7L9,6.3L14.3,1z" />
                <path id="Combined-Shape_1_" d="M14.3,1h-3.8V0H16v5.5h-1V1.7L9.7,7L9,6.3L14.3,1z" />
                <path id="window" d="M13,9h1v6c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h7v1H1v12h12V9z" />
            </g>
        </symbol>
        <symbol viewBox="0 0 14 12" id="drawerShapes_sidecar">
            <g id="Topology" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="App-Topology-6" transform="translate(-376.000000, -571.000000)" fill="#3D70B2">
                    <g id="Organization-/-File-/-notebook-/-16" transform="translate(375.000000, 569.000000)">
                        <path
                            d="M9.5,5 L13,5 L13,6 L9.5,6 L9.5,5 Z M9.5,7.5 L13,7.5 L13,8.5 L9.5,8.5 L9.5,7.5 Z M9.5,10 L13,10 L13,11 L9.5,11 L9.5,10 Z M14,2.5 L2,2.5 C1.44794374,2.50055123 1.00055123,2.94794374 1,3.5 L1,12.5 C1.00055123,13.0520563 1.44794374,13.4994488 2,13.5 L14,13.5 C14.5519422,13.4991739 14.9991739,13.0519422 15,12.5 L15,3.5 C14.9994488,2.94794374 14.5520563,2.50055123 14,2.5 Z M2,3.5 L7.5,3.5 L7.5,12.5 L2,12.5 L2,3.5 Z M8.5,12.5 L8.5,3.5 L14,3.5 L14.001,12.5 L8.5,12.5 Z"
                            id="Fill"
                        ></path>
                    </g>
                </g>
            </g>
        </symbol>
        <symbol viewBox="0 0 406 149" id="drawerShapes_legend">
            <defs>
                <circle id="path-1" cx="47.6343391" cy="46.9487385" r="46.9487385"></circle>
                <filter
                    x="-6.9%"
                    y="-5.9%"
                    width="113.8%"
                    height="113.8%"
                    filterUnits="objectBoundingBox"
                    id="filter-2"
                >
                    <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                    ></feColorMatrix>
                </filter>
                <rect id="path-3" x="0" y="100.157309" width="94.2253729" height="39.8020972" rx="3.1299159"></rect>
                <filter
                    x="-8.5%"
                    y="-17.6%"
                    width="117.0%"
                    height="140.2%"
                    filterUnits="objectBoundingBox"
                    id="filter-4"
                >
                    <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur
                        stdDeviation="2.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                    ></feGaussianBlur>
                    <feComposite
                        in="shadowBlurOuter1"
                        in2="SourceAlpha"
                        operator="out"
                        result="shadowBlurOuter1"
                    ></feComposite>
                    <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                    ></feColorMatrix>
                </filter>
                <circle id="path-5" cx="12.5196636" cy="12.5196636" r="12.5196636"></circle>
                <filter
                    x="-31.9%"
                    y="-28.0%"
                    width="163.9%"
                    height="163.9%"
                    filterUnits="objectBoundingBox"
                    id="filter-6"
                >
                    <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur
                        stdDeviation="2.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                    ></feGaussianBlur>
                    <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                    ></feColorMatrix>
                </filter>
            </defs>
            <g id="Topology" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="App-Topology--How-to-read-this-01.00" transform="translate(-924.000000, -1613.000000)">
                    <g id="Group-5" transform="translate(924.000000, 1616.000000)">
                        <g id="Group-13-Copy-2" transform="translate(149.000000, 0.000000)">
                            <g id="Oval-Copy-8">
                                <use fill="black" fillOpacity="1" filter="url(#filter-2)" href="#path-1"></use>
                                <use fill="#FFFFFF" fillRule="evenodd" href="#path-1"></use>
                            </g>
                            <circle
                                id="Oval-Copy-9"
                                stroke="#c7c7c7"
                                strokeWidth="4.1732212"
                                fill="#FFFFFF"
                                cx="47.6343391"
                                cy="46.9487385"
                                r="40.6889067"
                            ></circle>
                            <g
                                id="Organization-/-Data-/-data-vis--1-/-24"
                                transform="translate(33.028065, 33.385770)"
                                fill="#000000"
                            >
                                <path
                                    d="M23.7351956,20.083627 C23.0851254,20.0870047 22.4480264,20.265834 21.8911534,20.6012369 L18.4102957,17.1194662 C19.4243925,15.597454 19.4243925,13.6150944 18.4102957,12.0930821 L20.735432,9.76794587 C21.9499059,10.3529292 23.4092284,9.97658951 24.1893331,8.87723099 C24.9694378,7.77787248 24.842799,6.27613474 23.8896063,5.32294208 C22.9364137,4.36974942 21.4346759,4.24311057 20.3353174,5.02321528 C19.2359589,5.80331998 18.8596191,7.26264245 19.4446025,8.47711639 L17.1194662,10.8022527 C15.597454,9.78815586 13.6150944,9.78815586 12.0930821,10.8022527 L8.61131153,7.32048205 C8.94655622,6.76387497 9.12537951,6.1271127 9.12892137,5.47735282 C9.12892137,3.4606472 7.49405845,1.82578427 5.47735282,1.82578427 C3.4606472,1.82578427 1.82578427,3.4606472 1.82578427,5.47735282 C1.82578427,7.49405845 3.4606472,9.12892137 5.47735282,9.12892137 C6.12742296,9.12554365 6.76452195,8.94671438 7.32139494,8.61131153 L10.8022527,12.0930821 C9.78815586,13.6150944 9.78815586,15.597454 10.8022527,17.1194662 L7.32048205,20.6012369 C6.76385689,20.266034 6.12710636,20.087214 5.47735282,20.083627 C3.4606472,20.083627 1.82578427,21.7184899 1.82578427,23.7351956 C1.82578427,25.7519012 3.4606472,27.3867641 5.47735282,27.3867641 C7.49405845,27.3867641 9.12892137,25.7519012 9.12892137,23.7351956 C9.12554365,23.0851254 8.94671438,22.4480264 8.61131153,21.8911534 L12.0930821,18.4102957 C12.5785764,18.7338856 13.1219377,18.960777 13.6933821,19.0785328 L13.6933821,22.0773834 C12.4358305,22.5219951 11.6814846,23.8079222 11.9070387,25.1225479 C12.1325928,26.4371736 13.2724394,27.3981087 14.6062742,27.3981087 C15.940109,27.3981087 17.0799556,26.4371736 17.3055097,25.1225479 C17.5310638,23.8079222 16.7767179,22.5219951 15.5191663,22.0773834 L15.5191663,19.0785328 C16.0906107,18.960777 16.633972,18.7338856 17.1194662,18.4102957 L20.6012369,21.8920663 C20.2659922,22.4486734 20.0871689,23.0854357 20.083627,23.7351956 C20.083627,25.7519012 21.7184899,27.3867641 23.7351956,27.3867641 C25.7519012,27.3867641 27.3867641,25.7519012 27.3867641,23.7351956 C27.3867641,21.7184899 25.7519012,20.083627 23.7351956,20.083627 L23.7351956,20.083627 Z M14.6062742,11.8675978 C16.1188034,11.8675978 17.3449506,13.093745 17.3449506,14.6062742 C17.3449506,16.1188034 16.1188034,17.3449506 14.6062742,17.3449506 C13.093745,17.3449506 11.8675978,16.1188034 11.8675978,14.6062742 C11.8691074,13.0943707 13.0943707,11.8691074 14.6062742,11.8675978 L14.6062742,11.8675978 Z M3.65156855,5.47735282 C3.65156855,4.46900001 4.46900001,3.65156855 5.47735282,3.65156855 C6.48570563,3.65156855 7.3031371,4.46900001 7.3031371,5.47735282 C7.3031371,6.48570563 6.48570563,7.3031371 5.47735282,7.3031371 C4.46941718,7.30213067 3.65257498,6.48528846 3.65156855,5.47735282 L3.65156855,5.47735282 Z M5.47735282,25.5609798 C4.46900001,25.5609798 3.65156855,24.7435484 3.65156855,23.7351956 C3.65156855,22.7268428 4.46900001,21.9094113 5.47735282,21.9094113 C6.48570563,21.9094113 7.3031371,22.7268428 7.3031371,23.7351956 C7.30213067,24.7431312 6.48528846,25.5599734 5.47735282,25.5609798 L5.47735282,25.5609798 Z M23.7351956,25.5609798 C22.7268428,25.5609798 21.9094113,24.7435484 21.9094113,23.7351956 C21.9094113,22.7268428 22.7268428,21.9094113 23.7351956,21.9094113 C24.7435484,21.9094113 25.5609798,22.7268428 25.5609798,23.7351956 C25.5594716,24.742923 24.742923,25.5594716 23.7351956,25.5609798 L23.7351956,25.5609798 Z"
                                    id="Fill"
                                ></path>
                            </g>
                            <g id="Rectangle-Copy-2" fillRule="nonzero">
                                <use fill="black" fillOpacity="1" filter="url(#filter-4)" href="#path-3"></use>
                                <use fillOpacity="0.9" fill="#FFFFFF" href="#path-3"></use>
                            </g>
                            <text
                                id="Cluster-Possiblerept"
                                fontFamily="RedHatText-Medium, Red Hat Text"
                                fontSize="11.3720278"
                                fontWeight="400"
                                fill="#152935"
                            >
                                <tspan x="9.97101779" y="117.142818">
                                    Cluster
                                </tspan>
                                <tspan
                                    x="48.8178646"
                                    y="117.142818"
                                    fontFamily="RedHatText-Regular, Red Hat Text"
                                    fontWeight="normal"
                                ></tspan>
                                <tspan
                                    x="9.97101779"
                                    y="132.142818"
                                    fontFamily="RedHatText-Regular, Red Hat Text"
                                    fontWeight="normal"
                                >
                                    Possiblereptile
                                </tspan>
                            </text>
                            <g id="Group-8-Copy" transform="translate(0.685601, 66.771539)">
                                <g id="Oval">
                                    <use fill="black" fillOpacity="1" filter="url(#filter-6)" href="#path-5"></use>
                                    <use fill="#FFFFFF" fillRule="evenodd" href="#path-5"></use>
                                </g>
                                <g id="Icons-/-14px-/-check-circle" transform="translate(5.216526, 5.216526)">
                                    <path
                                        d="M14.6062742,7.3031371 C14.6062742,8.61848721 14.2774366,9.83567657 13.6197617,10.9547056 C12.9620869,12.0737347 12.0737347,12.9620869 10.9547056,13.6197617 C9.83567657,14.2774366 8.61848721,14.6062742 7.3031371,14.6062742 C5.98778699,14.6062742 4.77059762,14.2774366 3.65156855,13.6197617 C2.53253948,12.9620869 1.6441873,12.0737347 0.986512471,10.9547056 C0.32883764,9.83567657 0,8.61848721 0,7.3031371 C0,5.98778699 0.32883764,4.77059762 0.986512471,3.65156855 C1.6441873,2.53253948 2.53253948,1.6441873 3.65156855,0.986512471 C4.77059762,0.32883764 5.98778699,0 7.3031371,0 C8.61848721,0 9.83567657,0.32883764 10.9547056,0.986512471 C12.0737347,1.6441873 12.9620869,2.53253948 13.6197617,3.65156855 C14.2774366,4.77059762 14.6062742,5.98778699 14.6062742,7.3031371 Z"
                                        id="check-circle"
                                        stroke="#108926"
                                        strokeWidth="1.0433053"
                                    ></path>
                                    <path
                                        d="M6.44914123,11.1608426 L11.8675978,5.74238602 C11.9657581,5.66385752 12.0148385,5.55588133 12.0148385,5.41845656 C12.0148385,5.28103178 11.9657581,5.17305559 11.8675978,5.09452709 L11.2197388,4.41722002 C11.1215786,4.31905972 11.0086937,4.26997935 10.8810853,4.26997935 C10.7534769,4.26997935 10.6405921,4.31905972 10.5424318,4.41722002 L6.12521176,8.83444004 L4.06384242,6.77307069 C3.96568212,6.6749104 3.85279731,6.62583003 3.72518888,6.62583003 C3.59758045,6.62583003 3.48469564,6.6749104 3.38653535,6.77307069 L2.73867641,7.45037776 C2.64051612,7.52890627 2.59143574,7.63688246 2.59143574,7.77430723 C2.59143574,7.911732 2.64051612,8.01970819 2.73867641,8.0982367 L5.80128229,11.1608426 C5.8798108,11.2590029 5.98778699,11.3080832 6.12521176,11.3080832 C6.26263653,11.3080832 6.37061272,11.2590029 6.44914123,11.1608426 Z"
                                        id="Path"
                                        fill="#3E8635"
                                    ></path>
                                </g>
                            </g>
                        </g>
                        <g id="Group-Copy-7" transform="translate(93.000000, 126.000000)">
                            <line
                                x1="0.5"
                                y1="2.5"
                                x2="61.7500645"
                                y2="2.02790668"
                                id="Line-Copy"
                                stroke="#979797"
                                strokeLinecap="square"
                            ></line>
                            <circle id="Oval-Copy-15" fill="#979797" cx="61.25" cy="2" r="2"></circle>
                        </g>
                        <g id="Group-Copy-8" transform="translate(86.000000, 48.000000)">
                            <line
                                x1="0.5"
                                y1="2.5"
                                x2="88.7492627"
                                y2="1.81980663"
                                id="Line-Copy"
                                stroke="#979797"
                                strokeLinecap="square"
                            ></line>
                            <circle id="Oval-Copy-15" fill="#979797" cx="90.25" cy="2" r="2"></circle>
                        </g>
                        <g id="Group-Copy-9" transform="translate(126.000000, 78.000000)">
                            <line
                                x1="-1.34295963e-12"
                                y1="2.5"
                                x2="18.2513419"
                                y2="2.35932526"
                                id="Line-Copy"
                                stroke="#979797"
                                strokeLinecap="square"
                            ></line>
                            <circle id="Oval-Copy-15" fill="#979797" cx="18" cy="2" r="2"></circle>
                        </g>
                        <line
                            x1="205.75"
                            y1="113.25"
                            x2="304.125007"
                            y2="113.363466"
                            id="Line-Copy-9"
                            stroke="#979797"
                            strokeLinecap="square"
                        ></line>
                        <text
                            id="Resource-icon-Copy-2"
                            fontFamily="RedHatText-Medium, Red Hat Text"
                            fontSize="12"
                            fontWeight="400"
                            fill="#5A6872"
                        >
                            <tspan x="0" y="54">
                                Resource icon
                            </tspan>
                        </text>
                        <text
                            id="Cluster-deploy-statu-Copy-2"
                            fontFamily="RedHatText-Medium, Red Hat Text"
                            fontSize="12"
                            fontWeight="400"
                            fill="#5A6872"
                        >
                            <tspan x="0" y="83">
                                Resource deploy status
                            </tspan>
                        </text>
                        <text
                            id="Resource-type-Copy-2"
                            fontFamily="RedHatText-Medium, Red Hat Text"
                            fontSize="12"
                            fontWeight="400"
                            fill="#5A6872"
                        >
                            <tspan x="313" y="118">
                                Resource type
                            </tspan>
                        </text>
                        <text
                            id="Resource-name-Copy-2"
                            fontFamily="RedHatText-Medium, Red Hat Text"
                            fontSize="12"
                            fontWeight="400"
                            fill="#5A6872"
                        >
                            <tspan x="0" y="131">
                                Resource name
                            </tspan>
                        </text>
                        <circle id="Oval-Copy-19" fill="#979797" cx="205" cy="113" r="2"></circle>
                    </g>
                </g>
            </g>
        </symbol>
        <svg viewBox="0 0 1024 1024" id="drawerShapes_open-new-tab">
            <title>open-new-tab</title>
            <g id="open-new-tab" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M576,320 L896,320 L896,192 L576,192 L576,320 Z M128,320 L448,320 L448,192 L128,192 L128,320 Z M930,64 L896,64 L128,64 L94,64 C42.085,64 0,106.085 0,158 L0,192 L0,832 L0,866 C0,917.915 42.085,960 94,960 L128,960 L488,960 C501.255,960 512,949.255 512,936 L512,856 C512,842.745 501.255,832 488,832 L140,832 C133.373,832 128,826.627 128,820 L128,448 L896,448 L896,552 C896,565.255 906.745,576 920,576 L1000,576 C1013.255,576 1024,565.255 1024,552 L1024,158 C1024,106.085 981.915,64 930,64 L930,64 Z"
                    id="Fill-1"
                    fill="#0066CC"
                ></path>
                <path
                    d="M968,784 L848,784 L848,664 C848,650.7 837.3,640 824,640 L776,640 C762.7,640 752,650.7 752,664 L752,784 L632,784 C618.7,784 608,794.7 608,808 L608,856 C608,869.3 618.7,880 632,880 L752,880 L752,1000 C752,1013.3 762.7,1024 776,1024 L824,1024 C837.3,1024 848,1013.3 848,1000 L848,880 L968,880 C981.3,880 992,869.3 992,856 L992,808 C992,794.7 981.3,784 968,784"
                    id="Fill-3"
                    fill="#0066CC"
                ></path>
            </g>
        </svg>
    </svg>
)