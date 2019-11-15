function PlaySound(soundobj) {
	// получаем звук как переменную
    var thissound=document.getElementById(soundobj);
    // остановка проигрывания, если уже играл и пуск с начала
    thissound.pause();
    thissound.currentTime = 0;
    thissound.play();
}