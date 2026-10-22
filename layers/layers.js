var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_demakadm_1 = new ol.format.GeoJSON();
var features_demakadm_1 = format_demakadm_1.readFeatures(json_demakadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_demakadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_demakadm_1.addFeatures(features_demakadm_1);
var lyr_demakadm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_demakadm_1, 
                style: style_demakadm_1,
                popuplayertitle: 'demakadm',
                interactive: true,
    title: 'demakadm<br />\
    <img src="styles/legend/demakadm_1_0.png" /> Bonang<br />\
    <img src="styles/legend/demakadm_1_1.png" /> Demak<br />\
    <img src="styles/legend/demakadm_1_2.png" /> Dempet<br />\
    <img src="styles/legend/demakadm_1_3.png" /> Gajah<br />\
    <img src="styles/legend/demakadm_1_4.png" /> Genuk<br />\
    <img src="styles/legend/demakadm_1_5.png" /> Godong<br />\
    <img src="styles/legend/demakadm_1_6.png" /> Gubug<br />\
    <img src="styles/legend/demakadm_1_7.png" /> Guntur<br />\
    <img src="styles/legend/demakadm_1_8.png" /> Jati<br />\
    <img src="styles/legend/demakadm_1_9.png" /> Kaliwungu<br />\
    <img src="styles/legend/demakadm_1_10.png" /> Karanganyar<br />\
    <img src="styles/legend/demakadm_1_11.png" /> Karangawen<br />\
    <img src="styles/legend/demakadm_1_12.png" /> Karangtengah<br />\
    <img src="styles/legend/demakadm_1_13.png" /> Kebonagung<br />\
    <img src="styles/legend/demakadm_1_14.png" /> Kedung<br />\
    <img src="styles/legend/demakadm_1_15.png" /> Kedungjati<br />\
    <img src="styles/legend/demakadm_1_16.png" /> Klambu<br />\
    <img src="styles/legend/demakadm_1_17.png" /> Mijen<br />\
    <img src="styles/legend/demakadm_1_18.png" /> Mranggen<br />\
    <img src="styles/legend/demakadm_1_19.png" /> Nalumsari<br />\
    <img src="styles/legend/demakadm_1_20.png" /> Pecangaan<br />\
    <img src="styles/legend/demakadm_1_21.png" /> Pedurungan<br />\
    <img src="styles/legend/demakadm_1_22.png" /> Pringapus<br />\
    <img src="styles/legend/demakadm_1_23.png" /> Sayung<br />\
    <img src="styles/legend/demakadm_1_24.png" /> Tanggungharjo<br />\
    <img src="styles/legend/demakadm_1_25.png" /> Tegowanu<br />\
    <img src="styles/legend/demakadm_1_26.png" /> Tembalang<br />\
    <img src="styles/legend/demakadm_1_27.png" /> Undaan<br />\
    <img src="styles/legend/demakadm_1_28.png" /> Ungaran Timur<br />\
    <img src="styles/legend/demakadm_1_29.png" /> Wedung<br />\
    <img src="styles/legend/demakadm_1_30.png" /> Welahan<br />\
    <img src="styles/legend/demakadm_1_31.png" /> Wonosalam<br />\
    <img src="styles/legend/demakadm_1_32.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_demakadm_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_demakadm_1];
lyr_demakadm_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_demakadm_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_demakadm_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - always visible', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_demakadm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});