var player,player_move,player_over,track,ob,go,obG,obb,goo,w,h
var gamestate = 0
function preload(){
	track = loadImage("images/Road.png");
	player_move = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
	player_over= loadAnimation("images/mainPlayer3.png");
	ob=loadImage("images/opponent1.png")
	go=loadImage("images/gameOver.png")
}
function setup(){
	createCanvas(displayWidth, displayHeight);
    
	player = createSprite(10,10)
	player.addAnimation("SahilRunning",player_move);
	player.scale=0.2
	goo=createSprite(displayWidth/2, displayHeight/2)
	goo.addImage(go)
	goo.visible = false;
	obG = new Group();
	h = displayHeight
}
function draw(){
	background(0)
	image(track,-displayWidth/2,-displayHeight*0.5,displayWidth*10,displayHeight*2)
	camera.position.x=player.x+displayWidth/4
	
	drawSprites();
    player.velocityX=5
	if(gamestate==0)
	{
		player.y = mouseY
		if (World.frameCount % 400 == 0) {
obc()
	}}
	if(obG.isTouching(player)){
		gamestate=1
	}
	if(gamestate==1){
		player.velocityX=0
		player.addAnimation("asc",player_over)
		player.changeAnimation("asc",player_over)
        goo.x=player.x+500
		goo.visible = true;
	}

	
}
function obc(){
	obb =createSprite(player.x+displayWidth,Math.round(random(50,h)));
	obb.scale =0.2;
	obb.addImage(ob);
	obb.setLifetime=170;
	obG.add(obb);
}