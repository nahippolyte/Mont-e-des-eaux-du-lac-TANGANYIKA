ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32735").setExtent([715990.381938, 9615562.007336, 785171.173256, 9643290.340699]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TANGANYIKABujumbura_1 = new ol.format.GeoJSON();
var features_TANGANYIKABujumbura_1 = format_TANGANYIKABujumbura_1.readFeatures(json_TANGANYIKABujumbura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_TANGANYIKABujumbura_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANGANYIKABujumbura_1.addFeatures(features_TANGANYIKABujumbura_1);
var lyr_TANGANYIKABujumbura_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANGANYIKABujumbura_1, 
                style: style_TANGANYIKABujumbura_1,
                popuplayertitle: 'TANGANYIKA-Bujumbura',
                interactive: true,
                title: '<img src="styles/legend/TANGANYIKABujumbura_1.png" /> TANGANYIKA-Bujumbura'
            });
var format_Zonedtudes_2 = new ol.format.GeoJSON();
var features_Zonedtudes_2 = format_Zonedtudes_2.readFeatures(json_Zonedtudes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Zonedtudes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedtudes_2.addFeatures(features_Zonedtudes_2);
var lyr_Zonedtudes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedtudes_2, 
                style: style_Zonedtudes_2,
                popuplayertitle: 'Zone d\'études',
                interactive: true,
                title: '<img src="styles/legend/Zonedtudes_2.png" /> Zone d\'études'
            });
var format_LimitesofficiellesdeBujumbura_3 = new ol.format.GeoJSON();
var features_LimitesofficiellesdeBujumbura_3 = format_LimitesofficiellesdeBujumbura_3.readFeatures(json_LimitesofficiellesdeBujumbura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_LimitesofficiellesdeBujumbura_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesofficiellesdeBujumbura_3.addFeatures(features_LimitesofficiellesdeBujumbura_3);
var lyr_LimitesofficiellesdeBujumbura_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesofficiellesdeBujumbura_3, 
                style: style_LimitesofficiellesdeBujumbura_3,
                popuplayertitle: 'Limites officielles de Bujumbura',
                interactive: true,
                title: '<img src="styles/legend/LimitesofficiellesdeBujumbura_3.png" /> Limites officielles de Bujumbura'
            });
var format_Courbedeniveau_4 = new ol.format.GeoJSON();
var features_Courbedeniveau_4 = format_Courbedeniveau_4.readFeatures(json_Courbedeniveau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Courbedeniveau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau_4.addFeatures(features_Courbedeniveau_4);
var lyr_Courbedeniveau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau_4, 
                style: style_Courbedeniveau_4,
                popuplayertitle: 'Courbe de niveau',
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau_4.png" /> Courbe de niveau'
            });
var format_Waterways_5 = new ol.format.GeoJSON();
var features_Waterways_5 = format_Waterways_5.readFeatures(json_Waterways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Waterways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_5.addFeatures(features_Waterways_5);
var lyr_Waterways_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_5, 
                style: style_Waterways_5,
                popuplayertitle: 'Water ways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_5.png" /> Water ways'
            });
var format_Zonneaffecteparlamontedulacdbf_6 = new ol.format.GeoJSON();
var features_Zonneaffecteparlamontedulacdbf_6 = format_Zonneaffecteparlamontedulacdbf_6.readFeatures(json_Zonneaffecteparlamontedulacdbf_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Zonneaffecteparlamontedulacdbf_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonneaffecteparlamontedulacdbf_6.addFeatures(features_Zonneaffecteparlamontedulacdbf_6);
var lyr_Zonneaffecteparlamontedulacdbf_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonneaffecteparlamontedulacdbf_6, 
                style: style_Zonneaffecteparlamontedulacdbf_6,
                popuplayertitle: 'Zonne affectée par la montée du lac.dbf',
                interactive: true,
                title: '<img src="styles/legend/Zonneaffecteparlamontedulacdbf_6.png" /> Zonne affectée par la montée du lac.dbf'
            });
var format_FrontireTANGANYIKA_7 = new ol.format.GeoJSON();
var features_FrontireTANGANYIKA_7 = format_FrontireTANGANYIKA_7.readFeatures(json_FrontireTANGANYIKA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_FrontireTANGANYIKA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrontireTANGANYIKA_7.addFeatures(features_FrontireTANGANYIKA_7);
var lyr_FrontireTANGANYIKA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrontireTANGANYIKA_7, 
                style: style_FrontireTANGANYIKA_7,
                popuplayertitle: 'Frontire TANGANYIKA',
                interactive: true,
                title: '<img src="styles/legend/FrontireTANGANYIKA_7.png" /> Frontire TANGANYIKA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TANGANYIKABujumbura_1.setVisible(true);lyr_Zonedtudes_2.setVisible(true);lyr_LimitesofficiellesdeBujumbura_3.setVisible(true);lyr_Courbedeniveau_4.setVisible(true);lyr_Waterways_5.setVisible(true);lyr_Zonneaffecteparlamontedulacdbf_6.setVisible(true);lyr_FrontireTANGANYIKA_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TANGANYIKABujumbura_1,lyr_Zonedtudes_2,lyr_LimitesofficiellesdeBujumbura_3,lyr_Courbedeniveau_4,lyr_Waterways_5,lyr_Zonneaffecteparlamontedulacdbf_6,lyr_FrontireTANGANYIKA_7];
lyr_TANGANYIKABujumbura_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Zonedtudes_2.set('fieldAliases', {'id': 'id', 'SHAP ZONE': 'SHAP ZONE', 'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'ValidTo': 'ValidTo', 'Communes': 'Communes', 'Admin2PCOD': 'Admin2PCOD', 'Admin2PC_1': 'Admin2PC_1', 'Provinces': 'Provinces', 'Admin1PCOD': 'Admin1PCOD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'OBJECTID_2': 'OBJECTID_2', 'admin0Na_1': 'admin0Na_1', 'admin0Pc_1': 'admin0Pc_1', 'date_2': 'date_2', 'validOn_2': 'validOn_2', 'ValidTo_2': 'ValidTo_2', 'Communes_2': 'Communes_2', 'Admin2PC_2': 'Admin2PC_2', 'Admin2PC_3': 'Admin2PC_3', 'Provinces_': 'Provinces_', 'Admin1PC_1': 'Admin1PC_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'date_2_2': 'date_2_2', 'OBJECTID_3': 'OBJECTID_3', 'admin0Na_2': 'admin0Na_2', 'admin0Pc_2': 'admin0Pc_2', 'date_3': 'date_3', 'validOn_3': 'validOn_3', 'ValidTo_3': 'ValidTo_3', 'Communes_3': 'Communes_3', 'Admin2PC_4': 'Admin2PC_4', 'Admin2PC_5': 'Admin2PC_5', 'Province_1': 'Province_1', 'Admin1PC_2': 'Admin1PC_2', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_2': 'Shape_Ar_2', });
lyr_LimitesofficiellesdeBujumbura_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'ValidTo': 'ValidTo', 'Communes': 'Communes', 'Admin2PCOD': 'Admin2PCOD', 'Admin2PC_1': 'Admin2PC_1', 'Provinces': 'Provinces', 'Admin1PCOD': 'Admin1PCOD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Courbedeniveau_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Waterways_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_Zonneaffecteparlamontedulacdbf_6.set('fieldAliases', {'Nom': 'Nom', });
lyr_FrontireTANGANYIKA_7.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_TANGANYIKABujumbura_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Zonedtudes_2.set('fieldImages', {'id': '', 'SHAP ZONE': '', 'OBJECTID': '', 'admin0Name': '', 'admin0Pcod': '', 'date': '', 'validOn': '', 'ValidTo': '', 'Communes': '', 'Admin2PCOD': '', 'Admin2PC_1': '', 'Provinces': '', 'Admin1PCOD': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'OBJECTID_2': '', 'admin0Na_1': '', 'admin0Pc_1': '', 'date_2': '', 'validOn_2': '', 'ValidTo_2': '', 'Communes_2': '', 'Admin2PC_2': '', 'Admin2PC_3': '', 'Provinces_': '', 'Admin1PC_1': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'date_2_2': '', 'OBJECTID_3': '', 'admin0Na_2': '', 'admin0Pc_2': '', 'date_3': '', 'validOn_3': '', 'ValidTo_3': '', 'Communes_3': '', 'Admin2PC_4': '', 'Admin2PC_5': '', 'Province_1': '', 'Admin1PC_2': '', 'Shape_Le_2': '', 'Shape_Ar_2': '', });
lyr_LimitesofficiellesdeBujumbura_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'ValidTo': 'DateTime', 'Communes': 'TextEdit', 'Admin2PCOD': 'TextEdit', 'Admin2PC_1': 'TextEdit', 'Provinces': 'TextEdit', 'Admin1PCOD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Courbedeniveau_4.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_Waterways_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_Zonneaffecteparlamontedulacdbf_6.set('fieldImages', {'Nom': 'TextEdit', });
lyr_FrontireTANGANYIKA_7.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_TANGANYIKABujumbura_1.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'header label - always visible', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'header label - always visible', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Zonedtudes_2.set('fieldLabels', {'id': 'no label', 'SHAP ZONE': 'no label', 'OBJECTID': 'no label', 'admin0Name': 'header label - always visible', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'ValidTo': 'no label', 'Communes': 'header label - always visible', 'Admin2PCOD': 'no label', 'Admin2PC_1': 'no label', 'Provinces': 'no label', 'Admin1PCOD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'header label - visible with data', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', 'OBJECTID_2': 'no label', 'admin0Na_1': 'no label', 'admin0Pc_1': 'no label', 'date_2': 'no label', 'validOn_2': 'no label', 'ValidTo_2': 'no label', 'Communes_2': 'no label', 'Admin2PC_2': 'no label', 'Admin2PC_3': 'no label', 'Provinces_': 'no label', 'Admin1PC_1': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'date_2_2': 'no label', 'OBJECTID_3': 'no label', 'admin0Na_2': 'no label', 'admin0Pc_2': 'no label', 'date_3': 'no label', 'validOn_3': 'no label', 'ValidTo_3': 'no label', 'Communes_3': 'header label - always visible', 'Admin2PC_4': 'no label', 'Admin2PC_5': 'no label', 'Province_1': 'header label - always visible', 'Admin1PC_2': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_2': 'no label', });
lyr_LimitesofficiellesdeBujumbura_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'admin0Name': 'header label - always visible', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'ValidTo': 'no label', 'Communes': 'header label - always visible', 'Admin2PCOD': 'no label', 'Admin2PC_1': 'no label', 'Provinces': 'no label', 'Admin1PCOD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Courbedeniveau_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label - always visible', });
lyr_Waterways_5.set('fieldLabels', {'osm_id': 'header label - always visible', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'header label - always visible', });
lyr_Zonneaffecteparlamontedulacdbf_6.set('fieldLabels', {'Nom': 'header label - always visible', });
lyr_FrontireTANGANYIKA_7.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_FrontireTANGANYIKA_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});