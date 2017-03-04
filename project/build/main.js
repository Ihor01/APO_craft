
var BufferedBuilding = {
    buffer: new Array(),
    perTick:20,
    setTileFunction:function(x, y, z, id, data){
        setTile(x, y, z, id, data);
    }
};

BufferedBuilding.setTile = function(x, y, z, id, data){
    this.buffer.push({x:x, y:y, z:z, id:id, data:data});
}

BufferedBuilding.modTick = function(){
    for(var i = 0; (i < this.perTick && this.buffer.length > 0); i++){
        var block = this.buffer.shift();
        this.setTileFunction(block.x, block.y, block.z, block.id, block.data);
    }
}

var ID_ASPHALT = 253;

Block.defineBlock (ID_ASPHALT, "Асфальт", 
    [["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 1], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 2], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 3], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 4], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 5], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 6], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 7], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 8], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 9], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 10], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0]], 
    1, true, 0);

var Roads = {};

Roads.generateSimpleRoad = function(x, y, z, directionZ){
    Generation.setChunkReady(x,z,true);
        if(directionZ){
            Generation.setChunkReady(x,z+16,true);
            for(var i = 0; i < 16; i++){
            setTile(x, y, z + i, ID_ASPHALT, 3);
            setTile(x + 1, y, z + i, ID_ASPHALT, 0);
            setTile(x + 2, y, z + i, ID_ASPHALT, 1);
            setTile(x + 3, y, z + i, ID_ASPHALT, 0);
            setTile(x + 4, y, z + i, ID_ASPHALT, 4);
            setTile(x + 1, y+1, z + i, 0);
            setTile(x + 2, y+1, z + i, 0);
            setTile(x + 3, y+1, z + i, 0);
            setTile(x + 4, y+1, z + i, 0);
        }
        if(srandom(sr(x)+""+sr(y)+""+sr(z)) < 0.25){
            setTile(x + 0, y, z, ID_ASPHALT, 9);
            setTile(x + 1, y, z, ID_ASPHALT, 9);
            setTile(x + 3, y, z, ID_ASPHALT, 10);
            setTile(x + 4, y, z, ID_ASPHALT, 10);
        }
        if(srandom(sr(x)+""+sr(y)+""+sr(z)) < 0.25){
            setTile(x + 0, y, z + 15, ID_ASPHALT, 9);
            setTile(x + 1, y, z + 15, ID_ASPHALT, 9);
            setTile(x + 3, y, z + 15, ID_ASPHALT, 10);
            setTile(x + 4, y, z + 15, ID_ASPHALT, 10);
        }
    }
    else{
        Generation.setChunkReady(x+16,z,true);
            for(var i = 0; i < 16; i++){
            
            setTile(x + i, y, z + 0, ID_ASPHALT, 5);
            setTile(x + i, y, z + 1, ID_ASPHALT, 0);
            setTile(x + i, y, z + 2, ID_ASPHALT, 2);
            setTile(x + i, y, z + 3, ID_ASPHALT, 0);
            setTile(x + i, y, z + 4, ID_ASPHALT, 6);
            setTile(x + i, y+1, z + 1, 0);
            setTile(x + i, y+1, z + 2, 0);
            setTile(x + i, y+1, z + 3, 0);
            setTile(x + i, y+1, z + 4, 0);
        }
        if(srandom(x+""+y+""+z) < 0.25){
            setTile(x, y, z + 0, ID_ASPHALT, 8);
            setTile(x, y, z + 1, ID_ASPHALT, 8);
            setTile(x, y, z + 3, ID_ASPHALT, 7);
            setTile(x, y, z + 4, ID_ASPHALT, 7);
        }
        if(srandom(x+""+y+""+z) < 0.25){
            setTile(x + 15, y, z + 0, ID_ASPHALT, 8);
            setTile(x + 15, y, z + 1, ID_ASPHALT, 8);
            setTile(x + 15, y, z + 3, ID_ASPHALT, 7);
            setTile(x + 15, y, z + 4, ID_ASPHALT, 7);
        }
    }
};

Roads.generateSimpleCrossroad = function(x, y, z, roadLeft, roadRight, roadForward, roadBack){
    /*Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
    Generation.generateStoneLayerAtChunk(x,z);*/
    Generation.setChunkReady(x,z,true);
    for(var i = 0; i < 5; i++)
        for(var j = 0; j < 5; j++)
        { 
            setTile(x + i, y, z + j, ID_ASPHALT, 0);
            setTile(x+i,y+1,z+j,0);
        }
    
    if(!roadLeft) {
        for(var i = 0; i < 5; i++)
        {
            setTile(x + i, y, z, ID_ASPHALT, 5);
            
        }
    }
    
    if(!roadRight) {
        for(var i = 0; i < 5; i++)
        {
            setTile(x + i, y, z + 4, ID_ASPHALT, 6);
            
        }
    }
    
    if(!roadForward) {
        for(var i = 0; i < 5; i++)
        {
            setTile(x + 4, y, z + i, ID_ASPHALT, 4);
            
        }
    }
    
    if(!roadBack){
        for(var i = 0; i < 5; i++)
            setTile(x, y, z + i, ID_ASPHALT, 3);
    }
    
    if(!roadForward && !roadBack){
        for(var i = 0; i < 5; i++)
            setTile(x + 2, y, z + i, ID_ASPHALT, 1);
    }
    
    if(!roadLeft && !roadRight){
        for(var i = 0; i < 5; i++)
            setTile(x + i, y, z + 2, ID_ASPHALT, 2);
    }
};




//APO Craft generation
//You are not welcome here 

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function runUI(f)
{
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function(){
            try{
                f();
            }catch(e){
                print(e);
            }
        }
    }));
}

function srandom(seed)//for seedRandom
{
    seed     = /*sr(Randomizer.getWorldSeed())*/+seed;
    var arg1 = Math.abs(Math.sin(seed*3));
    var arg2 = Math.abs(seed)/1.5;
    var arg3 = Math.abs(seed/50);
    var fin  = Math.tan(arg1*arg2+arg3/1.5)*2.5;
    while(Math.abs(fin)>1)
    {
        fin/=2.5;
    }
    return (Math.abs(fin));
}

function showSimpleDialog(title,msg)
{
    runUI(function(){
        var dialog = new android.app.AlertDialog.Builder(context);
        dialog.setTitle(title);
        var scroll = new android.widget.ScrollView(context);
        var layout = new android.widget.LinearLayout(context); 
        var TextView = new android.widget.TextView(context); 
        TextView.setText(msg); 
        TextView.setTextSize(20); 
        layout.addView(TextView); 
        scroll.addView(layout); 
        dialog.setView(scroll); 
        dialog.create().show(); 
        return dialog; 
    });
}

function error(e)
{
    showSimpleDialog("err",e);
}

function convertStreamToString(is) { 
    var bis = new java.io.BufferedInputStream(is); 
    var buf = new java.io.ByteArrayOutputStream(); 
    var res = bis.read(); 
    while(res != -1) { 
        buf.write(res); 
        res = bis.read(); 
    } 
    return buf.toString(); 
}

function setTileFromJson(name, x1, y1, z1){
    
    var str    = ModPE.openInputStreamFromTexturePack("buildings/" + name);
    var string = convertStreamToString(str);
    var json   = JSON.parse(string);
    for(var y = 0; y < json.length; y++){
        for(var x = 0; x < json[0].length; x++){
            for(var z = 0; z < json[0][0].length; z++){

                var id   = json[y][x][z].id;
                var meta = json[y][x][z].meta;
                if(id!=0){
                bufferSetTile(x1 + x, y1 + y, z1 + z, id, meta); 
                }
            }
        }
    }
    //});
}






//Begin with API for easier coding

//Change parameters if you want
var gen_medium_height        = 75;//blocks
var gen_chunk_width          = 2;
var gen_chunk_min_height     = 45;//blocks
var gen_chunk_max_height     = 80;//blocks//
var gen_landscape_height     = 3;//blocks//
var gen_radius               = 2;//chunks//>>
var gen_cycle_delay          = 200;//milliseconds
var new_level_preparing_time = 20*10;//ticks//
var gen_tick_interval        = 20*3;//ticks
var gen_building_json_count  = 13;
var gen_ores                 = [];
var buffer                   = [];
var build_speed              = 50;
var gen_chunks               = [];
var chunk_info               = [];
var gen_bioms_parameters     = [];

function addBiom(grass_array,stone_array,ores_array,rarity,chunk_logic)
{
    gen_bioms_parameters.push({grass:grass_array,stone:stone_array,rarity:rarity,ores:ores_array,chunk:chunk_logic});
}

function getBiomForChunk(x,z)
{
    var chunk=Generation.getChunkPoints(x,z);
    var rarities=[];
    for(var biom=0;biom<gen_bioms_parameters.length;biom++)
    {
        rarities.push(gen_bioms_parameters[biom].rarity);
    }
    var random=100*srandom(chunk.x1+""+chunk.x2+""+chunk.z1+""+chunk.z2);
    var bioms=[];
    for(var biom=0;biom<rarities.length;biom++)
    {
        if(rarities[biom]<random)
        {
            bioms.push(biom);
        }
    }
    while(bioms.length==0)
    {
        random=100*srandom(Math.abs(chunk.x1)+""+Math.abs(chunk.x2)+""+Math.abs(chunk.z1)+""+Math.abs(chunk.z2)+""+Math.round(random));
        for(var biom=0;biom<rarities.length;biom++)
        {
            if(rarities[biom]<random)
            {
                bioms.push(biom);
            }
        }
    }
    var biom_index=Math.round(bioms.length*srandom(bioms.length+""+random));
    return gen_bioms_parameters[bioms[biom_index]];
}
function bufferSetTile(x,y,z,id,data,important)
{
    if(important)
    {
        setTile(x,y,z,id,data);
    }else{
        buffer.push({x:x,y:y,z:z,i:id,d:data});
    }
}
function bufferTick()
{
    for(var i=0;i<Math.min(buffer.length,build_speed);i++)
    {
        var b=buffer[0];
        if(getTile(b.x,b.y,b.z)!=ID_ASPHALT)
            setTile(b.x,b.y,b.z,b.i,b.d);
        buffer.shift();
    }
}

addBiom([2,3,3,3,3,3,4,48],[1],30);

/*
{grass_layer_ids:[{id:2,data:0}],stone_layer_ids:[1,0,1,1,1,3,1,5],rarity:10},//default
{grass_layer_ids:[[12,0]],stone_layer_ids:[1,0,[24,0]],rarity:15},//desert
{grass_layer_ids:[[3,0]],stone_layer_ids:[1,0,1,1,1,3,1,5],rarity:2},//burned earth
{grass_layer_ids:[[2,0],[3,0],[1,0]],stone_layer_ids:[1,0,1,1,1,3,1,5,46,0],rarity:8},//war area
];*/

var Generation={};

Generation.getChunkPoints=function(x,z)//return object with chunk points coords
{
    var pointx1=x-(x%16);
    var pointz1=z-(z%16);
    var pointx2=x-(x%16)+16;
    var pointz2=z-(z%16)+16;
    return {x1:pointx1,x2:pointx2,z1:pointz1,z2:pointz2};
};

Generation.isChunkReady=function(x,z)//return boolean value
{
    var chunk=Generation.getChunkPoints(x,z);
    return getTile(chunk.x1,0,chunk.z1)==57;
};

Generation.setChunkReady=function(x,z,ready)
{
    var chunk=Generation.getChunkPoints(x,z);
    if(ready){
        setTile(chunk.x1,0,chunk.z1,57);
        setTile(chunk.x1,1,chunk.z1,7);
    }else{
        setTile(chunk.x1,0,chunk.z1,0);
    }
};

Generation.getChunkDistance=function(x,z)
{
    var chunk=Generation.getChunkPoints(x,z);
    var chunk_center={x:(chunk.x2-chunk.x1)/2,z:(chunk.z2-chunk.z1)/2};
    var player={x:Player.getX(),z:Player.getZ()};
    var dx=Math.abs(player.x-chunk_center.x);
    var dz=Math.abs(player.z-chunk_center.z);
    var distance=Math.sqrt(dx*dx+dz*dz);
    return distance;
};



Generation.getSurfaceHeight=function(x,z)
{
    for(var y=gen_chunk_min_height;y<=gen_chunk_max_height;y++)
    {
        var tile=Level.getTile(x,y,z);
        if(tile==0)
        {
            return y;
        }
    }
    return null;
};
function sr(x)
{
    return Math.round(Math.abs(x));
}
Generation.generateSimpleLandscapeAtChunk=function(x,z,biom_obj)
{
    var chunk=Generation.getChunkPoints(x,z);
    var cx=chunk.x1;
    var cz=chunk.z1;
    var h=gen_medium_height;
    for(var zc=0;zc<16;zc++)
    {
        for(var xc=0;xc<16;xc++)
        {
            var condition=getTile(cx+xc,gen_medium_height,cz+zc)!=ID_ASPHALT;
            if(condition)
            {
            var grass_index=Math.round((biom_obj.grass.length-1)*srandom(Math.abs(xc)+""+Math.abs(cz)+""+Math.abs(cx)+""+Math.abs(cz)+"222"));
            var id=biom_obj.grass[grass_index];
            var height=Math.round(10*srandom(Math.abs(xc)+""+Math.abs(zc)+""+Math.abs(cx)+""+Math.abs(cz)));
            if(height>9)
            {
                //bufferSetTile(cx+xc,h+1,cz+zc,id);
                //bufferSetTile(cx+xc+1,h+1,cz+zc,id);
                //bufferSetTile(cx+xc-1,h+1,cz+zc,id);
                //bufferSetTile(cx+xc,h+1,cz+zc+1,id);
                //bufferSetTile(cx+xc,h+1,cz+zc-1,id);
            }
            bufferSetTile(cx+xc,h,cz+zc,id);
            }
        }
    }
    Generation.setChunkReady(x,z,true);
};
function addOre(id,data,rarity,size)
{
    var ore={id:id,d:data,r:rarity,s:size};
    gen_ores.push(ore);
}
addOre(1,1,4,30);
addOre(1,3,7,20);
addOre(1,5,10,25);
Generation.placeOresAtChunk=function(x,z,biom_obj)
{
    var chunk=Generation.getChunkPoints(x,z);
    for(var cx=chunk.x1;cx<chunk.x2;cx++)
    {
        for(var cz=chunk.z1;cz<chunk.z2;cz++)
        {
            bufferSetTile(cx,gen_medium_height-gen_chunk_width-2,cz,7);
            for(var y=gen_medium_height-gen_chunk_width-1;y<gen_medium_height-1;y++)
            {
                for(var o=0;o<gen_ores.length;o++)
                {
                if(srandom(sr(cx)+""+sr(cz)+""+sr(y))*100<gen_ores[o].r)
                {
                    
                    var ore=gen_ores[o];
                    Generation.generateOreStructure(cx,y,cz,ore.id,ore.d,ore.s);
                    break;
                }
                }
            }
        }
    }
};
Generation.generateStoneLayerAtChunk=function(x,z,biom_obj)
{
    var chunk=Generation.getChunkPoints(x,z);
    Generation.box(chunk.x1,gen_medium_height-gen_chunk_width-1,chunk.z1,chunk.x2,gen_medium_height,chunk.z2,1,0,99);
    Generation.placeOresAtChunk(x,z);
};

Generation.box=function(fx,fy,fz,tx,ty,tz,id,data,r)
{
    for(var x=Math.min(fx,tx);x<Math.max(fx,tx);x++)
    {
        for(var y=Math.min(fy,ty);y<Math.max(fy,ty);y++)
        {
            for(var z=Math.min(fz,tz);z<Math.max(fz,tz);z++)
            {
                if(srandom(sr(fx)+""+sr(fy)+""+sr(fz)+""+sr(tx)+""+sr(ty)+""+sr(tz)+""+id+""+data)*100<=r)
                {
                    bufferSetTile(x,y,z,id,data);
                }
            }
        }
    }  
};

function tonnel(x,y,z)
{
    Generation.box(x-2,y-2,z-2,x+2,y+2,z+2,0,0,90);
}

function startTonnel(x,y,z)
{
    tonnel(x,y,z);
    tonnel(x-4,y,z);
    continueTonnel(x-8,y,z,50);
    tonnel(x+4,y,z);
    continueTonnel(x+8,y,z,50);
    tonnel(x,y,z-4);
    continueTonnel(x,y,z-8,50);
    tonnel(x,y,z+4);
    continueTonnel(x,y,z+8,50);
    tonnel(x,y+4,z);
    continueTonnel(x,y+8,z,50);
    tonnel(x,y-4,z);
    continueTonnel(x,y-8,z,50);
}

function continueTonnel(x,y,z,r)
{
    t(x,y,z);
    var r1=Math.random()*100;
    var r2=Math.random()*100;
    var r3=Math.random()*100;
    var r4=Math.random()*100;
    var r5=Math.random()*100;
    var r6=Math.random()*100;
    if(r1<r)
    {
        tonnel(x-4,y,z);
        continueTonnel(x-8,y,z,r1);
    }
    if(r2<r)
    {
        tonnel(x+4,y,z);
        continueTonnel(x+8,y,z,r2);
    }
    if(r3<r)
    {
        tonnel(x,y,z-4);
        continueTonnel(x,y,z-8,r3);
    }
    if(r4<r)
    {
        tonnel(x,y,z+4);
        continueTonnel(x,y,z+8,r4);
    }
    if(r5<r)
    {
        tonnel(x,y+4,z);
        continueTonnel(x,y+8,z,r5);
    }
    if(r6<r)
    {
        tonnel(x,y-4,z);
        continueTonnel(x,y-8,z,r6);
    }
}

Generation.setInfo=function(info_obj)
{
    var coords=info_obj.points;
    var index=-1;
    for(var chunk in gen_chunks)
    {
        if(gen_chunks[chunk].points==coords)
        {
            index=chunk;
            break;
        }
    }
    if(index!=-1)
    {
        gen_chunks[index]=info_obj;
    }else{
        gen_chunks.push(info_obj);
    }

};

Generation.getChunkInfo=function(x,z)
{
    var points=Generation.getChunkPoints(x,z);
    var index=-1;
    for(var chunk in gen_chunks)
    {
        if(gen_chunks[chunk].points==coords)
        {
            index=chunk;
            break;
        }
    }
    if(index!=-1)
    {
        return gen_chunks[index];
    }else{
        return null;
    }
};


function road(x,z,bz)
{
    Roads.generateSimpleRoad(x,gen_medium_height,z,bz);
    if(bz)
    {
        Roads.generateSimpleRoad(x,gen_medium_height,z+16,bz);
        Generation.generateSimpleLandscapeAtChunk(x,z+16,gen_bioms_parameters[0]);
        Generation.generateStoneLayerAtChunk(x,z+16);
        Generation.setChunkReady(x,z+16,true);
    }else{
        Roads.generateSimpleRoad(x+16,gen_medium_height,z,bz);
        Generation.generateSimpleLandscapeAtChunk(x+16,z,gen_bioms_parameters[0]);
        Generation.setChunkReady(x+16,z,true);
        Generation.generateStoneLayerAtChunk(x+16,z);
    }
    Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
    Generation.generateStoneLayerAtChunk(x,z);
    Generation.setChunkReady(x,z,true);
}
function check(x,z)
{
    return Generation.isChunkReady(x,z);
}
Generation.startRoad=function(x,z,k)
{
    var chunk=Generation.getChunkPoints(x,z);
    Roads.generateSimpleCrossroad(chunk.x1+5,gen_medium_height,chunk.z1+5,true,true,true,true);
    
    road(chunk.x1+10,chunk.z1+5,false);
    Generation.continueRoad(chunk.x1+10+32,chunk.z1+5,k);
    road(chunk.x1+5-32,chunk.z1+5,false);
    Generation.continueRoad(chunk.x1+5-32,chunk.z1+5,k);
    road(chunk.x1+5,chunk.z1+10,true);
    Generation.continueRoad(chunk.x1+5,chunk.z1+10+32,k);
    road(chunk.x1+5,chunk.z1+5-32,true);
    Generation.continueRoad(chunk.x1,chunk.z1+5-32,k);
};
Generation.continueRoad=function(x,z,k)
{
    if(!check(x,z))
    {
    var chunk=Generation.getChunkPoints(x,z);
    Roads.generateSimpleCrossroad(chunk.x1+5,gen_medium_height,chunk.z1+5,check(x+16,z),check(x-16,z),check(x,z+16),check(x,z-16));
    var s1=srandom(1+""+sr(x)+""+sr(z)+""+sr(k))*100;
    var s2=srandom(2+""+sr(x)+""+sr(z)+""+sr(k))*100;
    var s3=srandom(3+""+sr(x)+""+sr(z)+""+sr(k))*100;
    var s4=srandom(4+""+sr(x)+""+sr(z)+""+sr(k))*100;
    if(s1<k)
    {
    road(chunk.x1+10,chunk.z1+5,false);
    Generation.continueRoad(chunk.x1+10+32,chunk.z1+5,k-s1);
    }
    if(s2<k)
    {
    road(chunk.x1+5-32,chunk.z1+5,false);
    Generation.continueRoad(chunk.x1+5-32,chunk.z1+5,k-s2);
    }
    if(s3<k)
    {
    road(chunk.x1+5,chunk.z1+10,true);
    Generation.continueRoad(chunk.x1+5,chunk.z1+10+32,k-s3);
    }
    if(s4<k)
    {
    road(chunk.x1+5,chunk.z1+5-32,true);
    Generation.continueRoad(chunk.x1,chunk.z1+5-32,k-s4);
    }
    }
    
};
Generation.generateOreStructure=function(x,y,z,id,data,size)
{
    bufferSetTile(x,y,z,id,data);
    Generation.ore(x+1,y,z,id,data,size);
    Generation.ore(x-1,y,z,id,data,size);
    Generation.ore(x,y+1,z,id,data,size);
    Generation.ore(x,y-1,z,id,data,size);
    Generation.ore(x,y,z+1,id,data,size);
    Generation.ore(x,y,z-1,id,data,size);
};
Generation.ore=function(x,y,z,id,data,left)
{
    var g=srandom(sr(x)+""+sr(y)+""+sr(z)+""+id+""+data)*100;
    if(g<left&&getTile(x,y,z)==1)
    {
        bufferSetTile(x,y,z,id,data);
        Generation.ore(x+1,y,z,id,data,g);
        Generation.ore(x-1,y,z,id,data,g);
        Generation.ore(x,y+1,z,id,data,g);
        Generation.ore(x,y-1,z,id,data,g);
        Generation.ore(x,y,z+1,id,data,g);
        Generation.ore(x,y,z-1,id,data,g);
    }
};
Generation.logic=function()
{
    try{
    var px=Player.getX();
    var pz=Player.getZ();
    for(var cx=px-gen_radius*16;cx<=px+gen_radius*16;cx+=16)
    {
        for(var cz=pz-gen_radius*16;cz<=pz+gen_radius*16;cz+=16)
        {
            if(!Generation.isChunkReady(cx,cz))
            {
                
                var chunk=Generation.getChunkPoints(cx,cz);
                if(srandom(sr(chunk.x1)+""+sr(chunk.x2)+""+sr(chunk.z1)+""+sr(chunk.z2))<0.30)
                {
                    Generation.startRoad(chunk.x1,chunk.z1,50);
                }else{
                    Generation.generateSimpleLandscapeAtChunk(cx,cz,gen_bioms_parameters[0]);
                    var building_number = Math.floor(srandom(Math.abs(chunk.x1)+""+sr(chunk.x2*chunk.x1/2)+""+Math.abs(chunk.z1))*(gen_building_json_count-1))+1;//gen_building_json_count;
                    setTileFromJson(building_number+".json",chunk.x1,gen_medium_height,chunk.z1);
                }
                Generation.generateStoneLayerAtChunk(cx,cz);
            }
        }
    }
    }catch(e){
        clientMessage(e);
    }
};
















function newLevel()
{

}

function useItem(x,y,z,i,b,s)
{
    if(i==280)
    {
    try{
        Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
        Generation.generateStoneLayerAtChunk(x,z);
        Generation.setChunkReady(x,z,true);
        print(Generation.isChunkReady(x,z));
    //  Generation.startRoad(x,z,100);
        //clientMessage(x+" "+z);
        }catch(e){print(e);}
    }
}

var gen_interval=gen_tick_interval;
function modTick()
{
    bufferTick();
    gen_interval--;
    if(gen_interval==0)
    {
    Generation.logic();
    gen_interval=gen_tick_interval;
    }
}


/*
Randomizer API
for APO Craft, #mineprogramming
...You are not welcome here
*/

/*
Randomizer.initialize() - initializes java.util.Random with world's seed
Randomizer.getWorldSeed() - returns unique number for each world
Randomizer.GaussRandom(max) - returns a random number from 0 to max
Randomizer.GaussRandom(max, depth) - returns a random number from 0 to max,
    depth - how more it is possible to get a number close to zero then to max
*/
var ID_ASPHALT = 253;

Block.defineBlock (ID_ASPHALT, "Асфальт", 
    [["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 1], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 2], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 3], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 4], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 5], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 6], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 7], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 8], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 9], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 10], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0]], 
    1, true, 0);

var Roads = {};

Roads.generateSimpleRoad = function(x, y, z, directionZ){
	
	    if(directionZ){
			
		    for(var i = 0; i < 16; i++){
            setTile(x, y, z + i, ID_ASPHALT, 3);
            setTile(x + 1, y, z + i, ID_ASPHALT, 0);
            setTile(x + 2, y, z + i, ID_ASPHALT, 1);
            setTile(x + 3, y, z + i, ID_ASPHALT, 0);
            setTile(x + 4, y, z + i, ID_ASPHALT, 4);
			setTile(x + 1, y+1, z + i, 0);
            setTile(x + 2, y+1, z + i, 0);
            setTile(x + 3, y+1, z + i, 0);
            setTile(x + 4, y+1, z + i, 0);
			
			
//<<<<<<< HEAD
//=======
        }
        if(srandom(sr(x)+""+sr(y)+""+sr(z)) < 0.25){
            setTile(x + 0, y, z, ID_ASPHALT, 9);
            setTile(x + 1, y, z, ID_ASPHALT, 9);
            setTile(x + 3, y, z, ID_ASPHALT, 10);
            setTile(x + 4, y, z, ID_ASPHALT, 10);
        }
        if(srandom(sr(x)+""+sr(y)+""+sr(z)) < 0.25){
            setTile(x + 0, y, z + 15, ID_ASPHALT, 9);
            setTile(x + 1, y, z + 15, ID_ASPHALT, 9);
            setTile(x + 3, y, z + 15, ID_ASPHALT, 10);
            setTile(x + 4, y, z + 15, ID_ASPHALT, 10);
        }
    }
    else{
		
		    for(var i = 0; i < 16; i++){
			
            setTile(x + i, y, z + 0, ID_ASPHALT, 5);
            setTile(x + i, y, z + 1, ID_ASPHALT, 0);
            setTile(x + i, y, z + 2, ID_ASPHALT, 2);
            setTile(x + i, y, z + 3, ID_ASPHALT, 0);
            setTile(x + i, y, z + 4, ID_ASPHALT, 6);
			setTile(x + i, y+1, z + 1, 0);
            setTile(x + i, y+1, z + 2, 0);
            setTile(x + i, y+1, z + 3, 0);
            setTile(x + i, y+1, z + 4, 0);
        }
        if(srandom(x+""+y+""+z) < 0.25){
            setTile(x, y, z + 0, ID_ASPHALT, 8);
            setTile(x, y, z + 1, ID_ASPHALT, 8);
            setTile(x, y, z + 3, ID_ASPHALT, 7);
            setTile(x, y, z + 4, ID_ASPHALT, 7);
        }
        if(srandom(x+""+y+""+z) < 0.25){
            setTile(x + 15, y, z + 0, ID_ASPHALT, 8);
            setTile(x + 15, y, z + 1, ID_ASPHALT, 8);
            setTile(x + 15, y, z + 3, ID_ASPHALT, 7);
            setTile(x + 15, y, z + 4, ID_ASPHALT, 7);
        }
    }
};

Roads.generateSimpleCrossroad = function(x, y, z, roadLeft, roadRight, roadForward, roadBack){
	/*Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
	Generation.generateStoneLayerAtChunk(x,z);*/
	
    for(var i = 0; i < 5; i++)
        for(var j = 0; j < 5; j++)
		{
            setTile(x + i, y, z + j, ID_ASPHALT, 0);
			setTile(x+i,y+1,z+j,0);
		}
    
    if(!roadLeft) {
        for(var i = 0; i < 5; i++)
		{
            setTile(x + i, y, z, ID_ASPHALT, 5);
			
		}
    }
    
    if(!roadRight) {
        for(var i = 0; i < 5; i++)
		{
            setTile(x + i, y, z + 4, ID_ASPHALT, 6);
			
		}
    }
    
    if(!roadForward) {
        for(var i = 0; i < 5; i++)
		{
            setTile(x + 4, y, z + i, ID_ASPHALT, 4);
			
		}
    }
    
    if(!roadBack){
        for(var i = 0; i < 5; i++)
            setTile(x, y, z + i, ID_ASPHALT, 3);
    }
    
    if(!roadForward && !roadBack){
        for(var i = 0; i < 5; i++)
            setTile(x + 2, y, z + i, ID_ASPHALT, 1);
    }
    
    if(!roadLeft && !roadRight){
        for(var i = 0; i < 5; i++)
            setTile(x + i, y, z + 2, ID_ASPHALT, 2);
    }
};

﻿
function GenerateTree(x, y, z, id, damage){
    var trunkCount    = Math.floor (Math.random() * 2) + 2;
    var branchesCount = Math.floor (Math.random() * 5) + 3;
    for(var i = 0; i < trunkCount; i++)
        setTile(x, y + i, z, id, damage);
    _BuildBranchesRecurcive(x, y + trunkCount, z, id, damage, branchesCount);
}

function _BuildBranchesRecurcive(x, y, z, id, damage, count){
    count--;
    if(count < 0) return;
    setTile(x, y, z, id, damage);
    for(var i = 0; i < 2; i++){
        var side = Math.floor (srandom(x+""+y+""+z) * 3);
        switch(side){
          case 0:
            setTile(x + 1, y + 1, z, id, damage);
            _BuildBranchesRecurcive(x + 2, y + 2, z, id, damage, count - 2);
            break;
          case 1:
            setTile(x - 1, y + 1, z, id, damage);
            _BuildBranchesRecurcive(x - 2, y + 2, z, id, damage, count - 2);
            break;
          case 2:
            setTile(x, y + 1, z + 1, id, damage);
            _BuildBranchesRecurcive(x, y + 2, z + 2, id, damage, count - 2);
            break;
          case 3:
            setTile(x, y + 1, z - 1, id, damage);
            _BuildBranchesRecurcive(x, y + 2, z - 2, id, damage, count - 2);
            break;
        }
    }
}
var Util = {};
 Util.convertStreamToString = function(is) { 
 var bis = new java.io.BufferedInputStream(is); 
 var buf = new java.io.ByteArrayOutputStream(); 
 var res = bis.read(); 
 while(res != -1) { 
 buf.write(res); 
 res = bis.read(); 
 } 
 return buf.toString(); 
};
Util.getWorldSeed = function(){ 
 var worldsPath = "/storage/sdcard0/games/com.mojang/minecraftWorlds/"; 
 var leveldat = worldsPath+Level.getWorldDir()+"/level.dat"; 
 if(!java.io.File(leveldat).exists()){ 
 return 0; 
 } 
 var fin = new java.io.FileInputStream(leveldat); 
 var nechs = []; 
 var startSeed = 0; 
 var seed = ""; 
 var str = ""; 
 var ch; 
 while((ch=fin.read())!=-1){ 
 nechs.push(ch); 
 str+=String.fromCharCode(ch); 
 } 
 startSeed = str.split("RandomSeed")[0].length+10; 
 for(var i=3;i>=0;i--){ 
 if(nechs[startSeed+i]<16){ 
 seed+="0"+nechs[startSeed+i].toString(16)+""; 
 }else{ 
 seed+=nechs[startSeed+i].toString(16)+""; 
 } 
 } 
 var endSeed = parseInt(seed, 16); 
 if(endSeed>(Math.pow(16,8)/2-1)){ 
 return endSeed-Math.pow(16,8); 
 } 
 return endSeed; 
}; 


var Randomizer = { 
 Random: (new java.util.Random(Util.getWorldSeed())) 
}; 
 
Randomizer.GaussRandom = function(max, depth){ 
 if (typeof depth === 'undefined') { 
 depth = 1; 
 } 
 var result = 0; 
 for(var i = 0; i < depth; i++){ 
 result += this.Random.nextInt(max * 2) - max; 
 } 
 return Math.round(Math.abs(result / depth)); 
}; 
 
Randomizer.Double = function(){ 
 return this.Random.nextDouble(); 
};
 
Randomizer.Int = function(max){ 
 return this.Random.nextInt(max); 
};

// !!! REQUIRES SIGN TEXTURES !!!
 
var ID_POST = 254;
var ID_SIGN = 255;

Block.defineBlock (ID_POST, "Столб", ["stone", 0], 1, false, 0);
Block.defineBlock (ID_SIGN, "Знак", 
    [["stone", 0], ["stone", 0], ["sign", 0], ["sign", 0], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 1], ["sign", 1], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 2], ["sign", 2], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 3], ["sign", 3], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 4], ["sign", 4], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 5], ["sign", 5], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 6], ["sign", 6], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 7], ["sign", 7], ["stone", 0], ["stone", 0],
    ["stone", 0], ["stone", 0], ["sign", 8], ["sign", 8], ["stone", 0], ["stone", 0]], 
    1, false, 0);

Block.setShape (ID_POST, 0.45, 0, 0.45, 0.55, 1, 0.55);
Block.setShape (ID_SIGN, 0, 0, 0.45, 1, 1, 0.55);

function GenerateSign(x, y, z, height, meta){
    for(var i = 0; i < height; i++){
        setTile(x, y + i, z, ID_POST, 0);
    }
    setTile(x, y + height, z, ID_SIGN, meta);
}

















//APO Craft generation
//You are not welcome here 

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function runUI(f)
{
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				f();
			}catch(e){
				print(e);
			}
		}
	}));
}

function srandom(seed)//for seedRandom
{
var worldseed=Util.getWorldSeed();
var arg1=Math.abs(Math.sin(seed+1));
var arg2=Math.abs(seed+1)/1.5;
var arg3=Math.sqrt((seed+1)/arg2);
//var arg4=Math.sqrt(worldseed);
var final=Math.abs(Math.tan(arg1*arg2)+arg3);
while(final>1)
{
final/=5.75;
}
return (Math.abs(final));
//return Math.random();
};


function showSimpleDialog(title,msg)
{
	runUI(function(){
		var dialog = new android.app.AlertDialog.Builder(context);
		dialog.setTitle(title);
		var scroll = new android.widget.ScrollView(context);
		var layout = new android.widget.LinearLayout(context); 
		var TextView = new android.widget.TextView(context); 
		TextView.setText(msg); 
		TextView.setTextSize(20); 
		layout.addView(TextView); 
		scroll.addView(layout); 
		dialog.setView(scroll); 
		dialog.create().show(); 
		return dialog; 
	});
}

function error(e)
{
	showSimpleDialog("err",e);
}

function convertStreamToString(is) { 
    var bis = new java.io.BufferedInputStream(is); 
    var buf = new java.io.ByteArrayOutputStream(); 
    var res = bis.read(); 
    while(res != -1) { 
        buf.write(res); 
        res = bis.read(); 
    } 
    return buf.toString(); 
}

function setTileFromJson(name, x1, y1, z1){
	var sameBlocks=[35,159,171];
	var sameData=[15,15,15];
    var str    = ModPE.openInputStreamFromTexturePack("buildings/" + name);
    var string = convertStreamToString(str);
    var json   = JSON.parse(string);
	//var thread=doInNewThread(function(){
    for(var y = 0; y < json.length; y++){
        for(var x = 0; x < json[0].length; x++){
            for(var z = 0; z < json[0][0].length; z++){

                var id   = json[y][x][z].id;
                var meta = json[y][x][z].meta;
				if(id!=0&&id!=2){
					if(sameBlocks.indexOf(id)!=-1)
					{
						meta=Math.round(srandom(sr(x1)+""+sr(y1)+""+sr(z1)+""+meta)*15);
					}
                	bufferSetTile(x1 + x, y1 + y+1, z1 + z, id, meta); 
				//thread.sleep(gen_cycle_delay);
				}
            }
        }
    }
	//});
}

 






//Begin with API for easier coding

//Change parameters if you want
var gen_medium_height=75;//blocks
var gen_chunk_width=5;
var gen_chunk_min_height=45;//blocks
var gen_chunk_max_height=80;//blocks//
var gen_landscape_height=3;//blocks//
var gen_radius=2;//chunks//>>
var gen_cycle_delay=200;//milliseconds
var new_level_preparing_time=20*10;//ticks//
var gen_tick_interval=20*3;//ticks
var gen_building_json_count=46;
var gen_ores=[];
var buffer=[];
var build_speed=50;//>>
var gen_chunks=[];
var chunk_info=[];
var road_structures=[];
var gen_bioms_parameters=[];
var gen_roads_rarity=0.20;
var gen_structure_global_rarity=0.08;
var seed;
function placeStructuresNearRoad(x,z,dz)
{
	var chunk=Generation.getChunkPoints(x,z);
		for(var xg=chunk.x1;xg<chunk.x2;xg++)
		{
			for(var zg=chunk.z1;zg<chunk.z2;zg++)
			{
				if(getTile(xg,gen_medium_height,zg)!=ID_ASPHALT&&srandom(sr(xg)+""+sr(zg)+"")<gen_structure_global_rarity)
				{
					var index=Math.round(srandom(sr(xg)+""+sr(zg)+""+chunk.x1+""+chunk.z1+""+chunk.x2+""+chunk.z2)*road_structures.length);
					//clientMessage("length "+road_structures.length);
					//clientMessage("index "+index);
					road_structures[index].build(xg,gen_medium_height,zg);
				}
			}
		}
	
}
function addStructure(rarity,building_function)//more rarity — more structures, building_function should look like this: function(x,y,z){BUILDING_CODE}, I recommend you to use bufferSetTile instead of setTile();
{ 
	for(var i=0;i<rarity;i++)
	{
	road_structures.push({rarity:rarity,build:building_function});
	}
}
addStructure(20,function(x,y,z){
	var dmg=Math.round(srandom(sr(x)+""+sr(y)+""+sr(z))*4);
	
	GenerateTree(x,y,z,17,dmg);
});
addStructure(10,function(x,y,z){
	var sign=Math.round(srandom(sr(x)+""+sr(y)+""+sr(z))*9);
	
	GenerateSign(x,y,z,2,sign);
	//GenerateSign(x, y + 1, z, 2, Math.floor (Math.random() * 9));
});
addStructure(15,function(x,y,z){
	bufferSetTile(x,y+5,z,89);
	for(var hy=0;hy<=4;hy++)
	{
		bufferSetTile(x,hy+y,z,85);
	}
	//setTile(x,y+5,z,89);
	
	bufferSetTile(x,y+6,85);
	//Level.destroyBlock(x,y+5,z,false);
});
function addBiom(grass_array,chunk_logic)//logic function x and z of the generating place
{
	gen_bioms_parameters.push({grass:grass_array,logic:chunk_logic});
}


function bufferSetTile(x,y,z,id,data,important)
{
	if(important)
	{
		setTile(x,y,z,id,data);
	}else{
		buffer.push({x:x,y:y,z:z,i:id,d:data});
	}
}
function bufferTick()
{
	for(var i=0;i<Math.min(buffer.length,build_speed);i++)
	{
		var b=buffer[0];
		if(getTile(b.x,b.y,b.z)!=ID_ASPHALT)
			setTile(b.x,b.y,b.z,b.i,b.d);
		buffer.shift();
	}
}

addBiom([2,3,3,3,3,3,4,48],function(x,z){
	Generation.defaultLogic(x,z,[2,3,3,3,3,3,4,48]);

});
addBiom([57],function(x,z)
{
	Generation.defaultLogic(x,z,[57]);
});
/*
{grass_layer_ids:[{id:2,data:0}],stone_layer_ids:[1,0,1,1,1,3,1,5],rarity:10},//default
{grass_layer_ids:[[12,0]],stone_layer_ids:[1,0,[24,0]],rarity:15},//desert
{grass_layer_ids:[[3,0]],stone_layer_ids:[1,0,1,1,1,3,1,5],rarity:2},//burned earth
{grass_layer_ids:[[2,0],[3,0],[1,0]],stone_layer_ids:[1,0,1,1,1,3,1,5,46,0],rarity:8},//war area
];*/

var Generation={};
/*
Generation.setChunkBiom=function(x,z,biom_obj)
{
	var chunk=Generation.getChunkPoints(x,z);
	setTile(chunk.x1+1,0,chunk.z1,biom_obj.idb);
	
};
Generation.getChunkBiom=function(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	var idb=getTile(chunk.x1+1,0,chunk.z1);
	if(idb!=7)
	{
		for(var i in gen_bioms_parameters)
		{
			if(gen_bioms_parameters[i].idb==idb)
			{
				return gen_bioms_parameters;
			}
		}
	}else{
		return undefined;
	}
};
Generation.checkBiomDivider=function(x,z)
{
	/*var xr=srandom(x);
	var zr=srandom(z);
	var value=false;
	var chunk=Generation.getChunkPoints(x,z);
	if(xr<0.01)
	{
		
		value=true;
		
	}
	if(zr<0.01)
	{
		
		value=true;
		
	}
	if(xr<0.01&&zr<0.01)
	{
		
	}
};*/
Generation.getBiomForChunk=function(x,z)
{
	var biom=Generation.getBiomPoints(x,z);
	var i=Math.round(srandom(biom.x1+""+biom.z1)*gen_bioms_parameters.length);
	return gen_bioms_parameters[i];
};
Generation.getBiomPoints=function(x,z)
{
	var pointx1=x-(x%(50*16));
	var pointz1=z-(z%(50*16));
	var pointx2=x-(x%(50*16))+50*16;
	var pointz2=z-(z%(50*16))+50*16;
	return {x1:pointx1,x2:pointx2,z1:pointz1,z2:pointz2};
};
Generation.getChunkPoints=function(x,z)//return object with chunk points coords
{
	var pointx1=x-(x%16);
	var pointz1=z-(z%16);
	var pointx2=x-(x%16)+16;
	var pointz2=z-(z%16)+16;
	return {x1:pointx1,x2:pointx2,z1:pointz1,z2:pointz2};
};

Generation.isChunkReady=function(x,z)//return boolean value
{
	var chunk=Generation.getChunkPoints(x,z);
	return getTile(chunk.x1,1,chunk.z1)==57;
};

Generation.setChunkReady=function(x,z,ready)
{
	var chunk=Generation.getChunkPoints(x,z);
	if(ready){
		setTile(chunk.x1,1,chunk.z1,57);
		setTile(chunk.x1,2,chunk.z1,7);
	}else{
		setTile(chunk.x1,0,chunk.z1,0);
	}
};

Generation.getChunkDistance=function(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	var chunk_center={x:(chunk.x2-chunk.x1)/2,z:(chunk.z2-chunk.z1)/2};
	var player={x:Player.getX(),z:Player.getZ()};
	var dx=Math.abs(player.x-chunk_center.x);
	var dz=Math.abs(player.z-chunk_center.z);
	var distance=Math.sqrt(dx*dx+dz*dz);
	return distance;
};



Generation.getSurfaceHeight=function(x,z)
{
	for(var y=gen_chunk_min_height;y<=gen_chunk_max_height;y++)
	{
		var tile=Level.getTile(x,y,z);
		if(tile==0)
		{
			return y;
		}
	}
	return null;
};
function sr(x)
{
	return Math.round(Math.abs(x));
}
Generation.generateSimpleLandscapeAtChunk=function(x,z,biom_obj)
{
	//var thread=doInNewThread(function(){
		var chunk=Generation.getChunkPoints(x,z);
		var cx=chunk.x1;
		var cz=chunk.z1;

		//clientMessage(cx+" "+cz);
//=======
//>>>>>>> branch 'master' of https://github.com/Ihor01/APO_craft.git
		var h=gen_medium_height;
		for(var zc=0;zc<16;zc++)
		{
			for(var xc=0;xc<16;xc++)
			{
				//thread.sleep(gen_cycle_delay);
				//var condition=getTile(cx+xc,gen_medium_height,cz+zc)!=ID_ASPHALT;
				//print(condition);
				//if(condition)
				//{
				var grass_index=Math.round((biom_obj.grass.length-1)*srandom(Math.abs(xc)+""+Math.abs(cz)+""+Math.abs(cx)+""+Math.abs(cz)+"222"));
				var id=biom_obj.grass[grass_index];
				var height=Math.round(10*srandom(Math.abs(xc)+""+Math.abs(zc)+""+Math.abs(cx)+""+Math.abs(cz)));
				/*if(height>9)
				{
					bufferSetTile(cx+xc,h+1,cz+zc,id);
					bufferSetTile(cx+xc+1,h+1,cz+zc,id);
					bufferSetTile(cx+xc-1,h+1,cz+zc,id);
					bufferSetTile(cx+xc,h+1,cz+zc+1,id);
					bufferSetTile(cx+xc,h+1,cz+zc-1,id);
				}*/
				bufferSetTile(cx+xc,h,cz+zc,id);
				//}
			}
		}
		Generation.setChunkReady(x,z,true);
	//});
};
function addOre(id,data,rarity,size)
{
	var ore={id:id,d:data,r:rarity,s:size};
	gen_ores.push(ore);
}
addOre(1,1,4,30);
addOre(1,3,7,20);
addOre(1,5,10,25);
Generation.placeOresAtChunk=function(x,z,biom_obj)
{
	var chunk=Generation.getChunkPoints(x,z);
	for(var cx=chunk.x1;cx<chunk.x2;cx++)
	{
		for(var cz=chunk.z1;cz<chunk.z2;cz++)
		{
			bufferSetTile(cx,gen_medium_height-gen_chunk_width-2,cz,7);
			for(var y=gen_medium_height-gen_chunk_width-1;y<gen_medium_height-1;y++)
			{
				for(var o=0;o<gen_ores.length;o++)
				{
				if(srandom(sr(cx)+""+sr(cz)+""+sr(y))*100<gen_ores[o].r)
				{
					
					var ore=gen_ores[o];
					Generation.generateOreStructure(cx,y,cz,ore.id,ore.d,ore.s);
					break;
				}
				}
			}
		}
	}
};
Generation.generateStoneLayerAtChunk=function(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	Generation.box(chunk.x1,gen_medium_height-gen_chunk_width-1,chunk.z1,chunk.x2,gen_medium_height,chunk.z2,1,0,99);
	Generation.placeOresAtChunk(x,z);
};

Generation.box=function(fx,fy,fz,tx,ty,tz,id,data,r)
{
	//var thread=doInNewThread(function(){
		for(var x=Math.min(fx,tx);x<Math.max(fx,tx);x++)
		{
			for(var y=Math.min(fy,ty);y<Math.max(fy,ty);y++)
			{
				for(var z=Math.min(fz,tz);z<Math.max(fz,tz);z++)
				{
					if(srandom(sr(fx)+""+sr(fy)+""+sr(fz)+""+sr(tx)+""+sr(ty)+""+sr(tz)+""+id+""+data)*100<=r)
					{
						bufferSetTile(x,y,z,id,data);
					}
					//thread.sleep(gen_cycle_delay);
				}
			}
		}  
	//});
};

function tonnel(x,y,z)
{
	Generation.box(x-2,y-2,z-2,x+2,y+2,z+2,0,0,90);
}

function startTonnel(x,y,z)
{
	tonnel(x,y,z);
	tonnel(x-4,y,z);
	continueTonnel(x-8,y,z,50);
	tonnel(x+4,y,z);
	continueTonnel(x+8,y,z,50);
	tonnel(x,y,z-4);
	continueTonnel(x,y,z-8,50);
	tonnel(x,y,z+4);
	continueTonnel(x,y,z+8,50);
	tonnel(x,y+4,z);
	continueTonnel(x,y+8,z,50);
	tonnel(x,y-4,z);
	continueTonnel(x,y-8,z,50);
}

function continueTonnel(x,y,z,r)
{
	t(x,y,z);
	var r1=Math.random()*100;
	var r2=Math.random()*100;
	var r3=Math.random()*100;
	var r4=Math.random()*100;
	var r5=Math.random()*100;
	var r6=Math.random()*100;
	if(r1<r)
	{
		tonnel(x-4,y,z);
		continueTonnel(x-8,y,z,r1);
	}
	if(r2<r)
	{
		tonnel(x+4,y,z);
		continueTonnel(x+8,y,z,r2);
	}
	if(r3<r)
	{
		tonnel(x,y,z-4);
		continueTonnel(x,y,z-8,r3);
	}
	if(r4<r)
	{
		tonnel(x,y,z+4);
		continueTonnel(x,y,z+8,r4);
	}
	if(r5<r)
	{
		tonnel(x,y+4,z);
		continueTonnel(x,y+8,z,r5);
	}
	if(r6<r)
	{
		tonnel(x,y-4,z);
		continueTonnel(x,y-8,z,r6);
	}
}

Generation.setChunkInfo=function(info_obj)
{
	var coords=info_obj.points;
	var index=-1;
	for(var chunk in gen_chunks)
	{
		if(gen_chunks[chunk].points==coords)
		{
			index=chunk;
			break;
		}
	}
	if(index!=-1)
	{
		gen_chunks[index]=info_obj;
	}else{
		gen_chunks.push(info_obj);
	}

};

Generation.getChunkInfo=function(x,z)
{
	var points=Generation.getChunkPoints(x,z);
	var index=-1;
	for(var chunk in gen_chunks)
	{
		if(gen_chunks[chunk].points==coords)
		{
			index=chunk;
			break;
		}
	}
	if(index!=-1)
	{
		return gen_chunks[index];
	}else{
		return null;
	}
};

function doInNewThread(whatToDo)//fuck this shit!
{
	var thread=new java.lang.Thread(
	new java.lang.Runnable({
		run:function(){
				whatToDo();
			}
		})
	);
	thread.start();
	return thread;
}
function road(x,z,bz)
{
	Roads.generateSimpleRoad(x,gen_medium_height,z,bz);
	if(bz)
	{
		Roads.generateSimpleRoad(x,gen_medium_height,z+16,bz);
		Generation.generateSimpleLandscapeAtChunk(x,z+16,gen_bioms_parameters[0]);
		Generation.generateStoneLayerAtChunk(x,z+16);
		Generation.setChunkReady(x,z+16,true);
	}else{
		Roads.generateSimpleRoad(x+16,gen_medium_height,z,bz);
		Generation.generateSimpleLandscapeAtChunk(x+16,z,gen_bioms_parameters[0]);
		Generation.setChunkReady(x+16,z,true);
		Generation.generateStoneLayerAtChunk(x+16,z);
	}
	Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
	Generation.generateStoneLayerAtChunk(x,z);
	Generation.setChunkReady(x,z,true);
}
function check(x,z)
{
	return Generation.isChunkReady(x,z);
}
Generation.startRoad=function(x,z,k)
{
	var chunk=Generation.getChunkPoints(x,z);
	Roads.generateSimpleCrossroad(chunk.x1+5,gen_medium_height,chunk.z1+5,true,true,true,true);
	
	road(chunk.x1+10,chunk.z1+5,false);
	Generation.continueRoad(chunk.x1+10+32,chunk.z1+5,k);
	road(chunk.x1+5-32,chunk.z1+5,false);
	Generation.continueRoad(chunk.x1+5-32,chunk.z1+5,k);
	road(chunk.x1+5,chunk.z1+10,true);
	Generation.continueRoad(chunk.x1+5,chunk.z1+10+32,k);
	road(chunk.x1+5,chunk.z1+5-32,true);
	Generation.continueRoad(chunk.x1,chunk.z1+5-32,k);
};
Generation.continueRoad=function(x,z,k)
{
	if(!check(x,z))
	{
	var chunk=Generation.getChunkPoints(x,z);
	Roads.generateSimpleCrossroad(chunk.x1+5,gen_medium_height,chunk.z1+5,check(x+16,z),check(x-16,z),check(x,z+16),check(x,z-16));
	var s1=srandom(1+""+sr(x)+""+sr(z)+""+sr(k))*100;
	var s2=srandom(2+""+sr(x)+""+sr(z)+""+sr(k))*100;
	var s3=srandom(3+""+sr(x)+""+sr(z)+""+sr(k))*100;
	var s4=srandom(4+""+sr(x)+""+sr(z)+""+sr(k))*100;
	if(s1<k)
	{
	road(chunk.x1+10,chunk.z1+5,false);
	Generation.continueRoad(chunk.x1+10+32,chunk.z1+5,k-s1);
	}
	if(s2<k)
	{
	road(chunk.x1+5-32,chunk.z1+5,false);
	Generation.continueRoad(chunk.x1+5-32,chunk.z1+5,k-s2);
	}
	if(s3<k)
	{
	road(chunk.x1+5,chunk.z1+10,true);
	Generation.continueRoad(chunk.x1+5,chunk.z1+10+32,k-s3);
	}
	if(s4<k)
	{
	road(chunk.x1+5,chunk.z1+5-32,true);
	Generation.continueRoad(chunk.x1,chunk.z1+5-32,k-s4);
	}
	}
	
};
Generation.generateOreStructure=function(x,y,z,id,data,size)
{
	bufferSetTile(x,y,z,id,data);
	Generation.ore(x+1,y,z,id,data,size);
	Generation.ore(x-1,y,z,id,data,size);
	Generation.ore(x,y+1,z,id,data,size);
	Generation.ore(x,y-1,z,id,data,size);
	Generation.ore(x,y,z+1,id,data,size);
	Generation.ore(x,y,z-1,id,data,size);
};
Generation.ore=function(x,y,z,id,data,left)
{
	var g=srandom(sr(x)+""+sr(y)+""+sr(z)+""+id+""+data)*100;
	if(g<left&&getTile(x,y,z)==1)
	{
		bufferSetTile(x,y,z,id,data);
		Generation.ore(x+1,y,z,id,data,g);
		Generation.ore(x-1,y,z,id,data,g);
		Generation.ore(x,y+1,z,id,data,g);
		Generation.ore(x,y-1,z,id,data,g);
		Generation.ore(x,y,z+1,id,data,g);
		Generation.ore(x,y,z-1,id,data,g);
	}
};
Generation.checkRoad=function(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	var xr=srandom(sr(chunk.x1));
	var zr=srandom(sr(chunk.z1));
	
	var value=false;
	
	if(xr<gen_roads_rarity)
	{
		Roads.generateSimpleRoad(chunk.x1+5,gen_medium_height,chunk.z1,true);
		value=true;
		placeStructuresNearRoad(x,z,true);
		
	}
	if(zr<gen_roads_rarity)
	{
		Roads.generateSimpleRoad(chunk.x1,gen_medium_height,chunk.z1+5,false);
		value=true;
		placeStructuresNearRoad(x,z,false);
	}
	if(xr<gen_roads_rarity&&zr<gen_roads_rarity)
	{
		Roads.generateSimpleCrossroad(chunk.x1+5,gen_medium_height,chunk.z1+5,true,true,true,true);
		
	}
	if(value){
		Generation.setChunkReady(x,z);
		
	}
	return value;
};
Generation.defaultLogic=function(cx,cz,arr)
{
	var chunk=Generation.getChunkPoints(cx,cz);
	Generation.generateSimpleLandscapeAtChunk(cx,cz,{grass:arr});
	Generation.generateStoneLayerAtChunk(cx,cz);
		if(!Generation.checkRoad(cx,cz))
			{
				var building_number=Math.floor(srandom(Math.abs(chunk.x1)+""+sr(chunk.x2*chunk.x1/2)+""+Math.abs(chunk.z1))*(gen_building_json_count-1))+1;//*gen_building_json_count;
				setTileFromJson(building_number+".json",chunk.x1,gen_medium_height,chunk.z1);
			}
};
Generation.logic=function()
{
	try{
	var px=Player.getX();
	var pz=Player.getZ();
	for(var cx=px-gen_radius*16;cx<=px+gen_radius*16;cx+=16)
	{
		for(var cz=pz-gen_radius*16;cz<=pz+gen_radius*16;cz+=16)
		{
			if(!Generation.isChunkReady(cx,cz))
			{
				
				//new
				
				
				var biom=Generation.getBiomForChunk(cx,cz);
				biom.logic(cx,cz);
				
				
				
				
				
				
				
				
				//old
				/*
				var chunk=Generation.getChunkPoints(cx,cz);
				Generation.generateSimpleLandscapeAtChunk(cx,cz,gen_bioms_parameters[0]);
				Generation.generateStoneLayerAtChunk(cx,cz);
				if(!Generation.checkRoad(cx,cz))
				{
						var building_number=Math.floor(srandom(Math.abs(chunk.x1)+""+sr(chunk.x2*chunk.x1/2)+""+Math.abs(chunk.z1))*(gen_building_json_count-1))+1;//*gen_building_json_count;
					setTileFromJson(building_number+".json",chunk.x1,gen_medium_height,chunk.z1);
				}
				*/
				
				
				
				
			}
		}
	}
	}catch(e){
		clientMessage(e);
	}
};
















function newLevel()
{
	//seed=Randomizer.getWorldSeed();
}

function useItem(x,y,z,i,b,s)
{
	if(i==280)
	{
	try{
		      GenerateSign(x, y + 1, z, 2, Math.floor (Math.random() * 9));
		}catch(e){print(e);}
	}
}

var gen_interval=gen_tick_interval;
function modTick()
{
	bufferTick();
	gen_interval--;
	if(gen_interval==0)
	{
	Generation.logic();
	gen_interval=gen_tick_interval;
	}

}
