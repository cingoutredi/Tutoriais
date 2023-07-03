#include "dos-like/dos.h"
int obstaculo1,obstaculo2,obstaculo3,altura,gameover;
void init(){
	obstaculo1=-250;
	obstaculo2=-250;
	obstaculo3=-250;
	altura=0;
	gameover=0;
}
int main(){
	setvideomode(videomode_320x200);
	init();
	while(!keystate(KEY_ESCAPE)){
		if(gameover!=0){
			if(keystate(KEY_UP))init();
		}else{
			if(altura==0&&keystate(KEY_UP))altura=5;
			if(altura%4==1)altura+=4;
			if(altura%4==3)altura-=4;
			if(altura>28)altura=31;
			if(altura<2)altura=0;
			setcolor(15);
			int background[8]={20,30,300,30,300,100,20,100};
			fillpoly(background,4);
			setcolor(2);
			int cabeca[8]={52,80-altura,56,80-altura,56,83-altura,52,83-altura};
			fillpoly(cabeca,4);
			int bracos[8]={48,84-altura,60,84-altura,60,86-altura,48,86-altura};
			fillpoly(bracos,4);
			int tronco[8]={53,86-altura,56,86-altura,56,91-altura,53,91-altura};
			fillpoly(tronco,4);
			int pernadir[8]={52,91-altura,54,91-altura,54,98-altura,52,98-altura};
			fillpoly(pernadir,4);
			int pernaesq[8]={55,91-altura,57,91-altura,57,98-altura,55,98-altura};
			fillpoly(pernaesq,4);
			setcolor(12);
			obstaculo1=(obstaculo1+3)%274;
			obstaculo2=(obstaculo2+4)%274;
			obstaculo3=(obstaculo3+5)%274;
			int obs1[6]={292-obstaculo1,98,296-obstaculo1,88,300-obstaculo1,98};
			int obs2[6]={292-obstaculo2,98,296-obstaculo2,88,300-obstaculo2,98};
			int obs3[6]={292-obstaculo3,98,296-obstaculo3,88,300-obstaculo3,98};
			if(obstaculo1>0)fillpoly(obs1,3);
			if(obstaculo2>0)fillpoly(obs2,3);
			if(obstaculo3>0)fillpoly(obs3,3);
			if(obstaculo1>232&&obstaculo1<242&&altura<9)gameover=1;
			if(obstaculo2>232&&obstaculo2<242&&altura<9)gameover=1;
			if(obstaculo3>232&&obstaculo3<242&&altura<9)gameover=1;
			sleep(20);
			waitvbl();
		}
	}
	return 0;
}
