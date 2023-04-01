gdjs.MainCode = {};
gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final = [];

gdjs.MainCode.GDLeftArrowRoundButtonObjects3_3final = [];

gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final = [];

gdjs.MainCode.GDRightArrowRoundButtonObjects3_3final = [];

gdjs.MainCode.GDBlock1Objects1= [];
gdjs.MainCode.GDBlock1Objects2= [];
gdjs.MainCode.GDBlock1Objects3= [];
gdjs.MainCode.GDBlock1Objects4= [];
gdjs.MainCode.GDBlock4Objects1= [];
gdjs.MainCode.GDBlock4Objects2= [];
gdjs.MainCode.GDBlock4Objects3= [];
gdjs.MainCode.GDBlock4Objects4= [];
gdjs.MainCode.GDBlock2Objects1= [];
gdjs.MainCode.GDBlock2Objects2= [];
gdjs.MainCode.GDBlock2Objects3= [];
gdjs.MainCode.GDBlock2Objects4= [];
gdjs.MainCode.GDBlock3Objects1= [];
gdjs.MainCode.GDBlock3Objects2= [];
gdjs.MainCode.GDBlock3Objects3= [];
gdjs.MainCode.GDBlock3Objects4= [];
gdjs.MainCode.GDScoreObjects1= [];
gdjs.MainCode.GDScoreObjects2= [];
gdjs.MainCode.GDScoreObjects3= [];
gdjs.MainCode.GDScoreObjects4= [];
gdjs.MainCode.GDBallObjects1= [];
gdjs.MainCode.GDBallObjects2= [];
gdjs.MainCode.GDBallObjects3= [];
gdjs.MainCode.GDBallObjects4= [];
gdjs.MainCode.GDCircleGuideObjects1= [];
gdjs.MainCode.GDCircleGuideObjects2= [];
gdjs.MainCode.GDCircleGuideObjects3= [];
gdjs.MainCode.GDCircleGuideObjects4= [];
gdjs.MainCode.GDHighScoreTextObjects1= [];
gdjs.MainCode.GDHighScoreTextObjects2= [];
gdjs.MainCode.GDHighScoreTextObjects3= [];
gdjs.MainCode.GDHighScoreTextObjects4= [];
gdjs.MainCode.GDPaddleObjects1= [];
gdjs.MainCode.GDPaddleObjects2= [];
gdjs.MainCode.GDPaddleObjects3= [];
gdjs.MainCode.GDPaddleObjects4= [];
gdjs.MainCode.GDBeginTextObjects1= [];
gdjs.MainCode.GDBeginTextObjects2= [];
gdjs.MainCode.GDBeginTextObjects3= [];
gdjs.MainCode.GDBeginTextObjects4= [];
gdjs.MainCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.MainCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.MainCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.MainCode.GDLeftArrowRoundButtonObjects4= [];
gdjs.MainCode.GDRightArrowRoundButtonObjects1= [];
gdjs.MainCode.GDRightArrowRoundButtonObjects2= [];
gdjs.MainCode.GDRightArrowRoundButtonObjects3= [];
gdjs.MainCode.GDRightArrowRoundButtonObjects4= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};
gdjs.MainCode.conditionTrue_2 = {val:false};
gdjs.MainCode.condition0IsTrue_2 = {val:false};
gdjs.MainCode.condition1IsTrue_2 = {val:false};
gdjs.MainCode.condition2IsTrue_2 = {val:false};
gdjs.MainCode.condition3IsTrue_2 = {val:false};
gdjs.MainCode.conditionTrue_3 = {val:false};
gdjs.MainCode.condition0IsTrue_3 = {val:false};
gdjs.MainCode.condition1IsTrue_3 = {val:false};
gdjs.MainCode.condition2IsTrue_3 = {val:false};
gdjs.MainCode.condition3IsTrue_3 = {val:false};


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.MainCode.GDCircleGuideObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreText"), gdjs.MainCode.GDHighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.MainCode.GDPaddleObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPaddleObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPaddleObjects1[i].returnVariable(gdjs.MainCode.GDPaddleObjects1[i].getVariables().get("PaddleAngle")).setNumber(90);
}
}{for(var i = 0, len = gdjs.MainCode.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCircleGuideObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDHighScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDHighScoreTextObjects1[i].setString("High Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("HighScore")));
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBeginTextObjects2Objects = Hashtable.newFrom({"BeginText": gdjs.MainCode.GDBeginTextObjects2});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowRoundButtonObjects4Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.MainCode.GDLeftArrowRoundButtonObjects4});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowRoundButtonObjects4Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.MainCode.GDRightArrowRoundButtonObjects4});
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BeginText"), gdjs.MainCode.GDBeginTextObjects2);
gdjs.MainCode.GDLeftArrowRoundButtonObjects2.length = 0;

gdjs.MainCode.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBeginTextObjects2Objects) > 0;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
gdjs.MainCode.condition2IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.MainCode.condition0IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.MainCode.condition1IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainCode.GDLeftArrowRoundButtonObjects3.length = 0;

gdjs.MainCode.GDRightArrowRoundButtonObjects3.length = 0;

{gdjs.MainCode.conditionTrue_2 = gdjs.MainCode.condition2IsTrue_1;
gdjs.MainCode.condition0IsTrue_2.val = false;
gdjs.MainCode.condition1IsTrue_2.val = false;
{
gdjs.MainCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition0IsTrue_2.val ) {
{
{gdjs.MainCode.conditionTrue_3 = gdjs.MainCode.condition1IsTrue_2;
gdjs.MainCode.GDLeftArrowRoundButtonObjects3_3final.length = 0;gdjs.MainCode.GDRightArrowRoundButtonObjects3_3final.length = 0;gdjs.MainCode.condition0IsTrue_3.val = false;
gdjs.MainCode.condition1IsTrue_3.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.MainCode.GDLeftArrowRoundButtonObjects4);
gdjs.MainCode.condition0IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.MainCode.condition0IsTrue_3.val ) {
    gdjs.MainCode.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDLeftArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDLeftArrowRoundButtonObjects3_3final.indexOf(gdjs.MainCode.GDLeftArrowRoundButtonObjects4[j]) === -1 )
            gdjs.MainCode.GDLeftArrowRoundButtonObjects3_3final.push(gdjs.MainCode.GDLeftArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.MainCode.GDRightArrowRoundButtonObjects4);
gdjs.MainCode.condition1IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.MainCode.condition1IsTrue_3.val ) {
    gdjs.MainCode.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDRightArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDRightArrowRoundButtonObjects3_3final.indexOf(gdjs.MainCode.GDRightArrowRoundButtonObjects4[j]) === -1 )
            gdjs.MainCode.GDRightArrowRoundButtonObjects3_3final.push(gdjs.MainCode.GDRightArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDLeftArrowRoundButtonObjects3_3final, gdjs.MainCode.GDLeftArrowRoundButtonObjects3);
gdjs.copyArray(gdjs.MainCode.GDRightArrowRoundButtonObjects3_3final, gdjs.MainCode.GDRightArrowRoundButtonObjects3);
}
}
}}
gdjs.MainCode.conditionTrue_2.val = true && gdjs.MainCode.condition0IsTrue_2.val && gdjs.MainCode.condition1IsTrue_2.val;
}
if( gdjs.MainCode.condition2IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.MainCode.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.MainCode.GDLeftArrowRoundButtonObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.MainCode.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.MainCode.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final.push(gdjs.MainCode.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final, gdjs.MainCode.GDLeftArrowRoundButtonObjects2);
gdjs.copyArray(gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final, gdjs.MainCode.GDRightArrowRoundButtonObjects2);
}
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects2);
/* Reuse gdjs.MainCode.GDBeginTextObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.MainCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects2[i].addForceTowardObject((gdjs.MainCode.GDPaddleObjects2.length !== 0 ? gdjs.MainCode.GDPaddleObjects2[0] : null), 250, 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDBeginTextObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBeginTextObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowRoundButtonObjects3Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.MainCode.GDLeftArrowRoundButtonObjects3});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowRoundButtonObjects3Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.MainCode.GDRightArrowRoundButtonObjects3});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.MainCode.GDPaddleObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.MainCode.GDPaddleObjects1});
gdjs.MainCode.eventsList2 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.MainCode.GDCircleGuideObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.MainCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.MainCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPaddleObjects2[i].putAroundObject((gdjs.MainCode.GDCircleGuideObjects2.length !== 0 ? gdjs.MainCode.GDCircleGuideObjects2[0] : null), (( gdjs.MainCode.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDCircleGuideObjects2[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(gdjs.MainCode.GDPaddleObjects2[i].getVariables().get("PaddleAngle"))));
}
}{for(var i = 0, len = gdjs.MainCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPaddleObjects2[i].setAngle((gdjs.MainCode.GDPaddleObjects2[i].getAngleToPosition((( gdjs.MainCode.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDCircleGuideObjects2[0].getCenterXInScene()), (( gdjs.MainCode.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDCircleGuideObjects2[0].getCenterYInScene()))) + 90);
}
}}

}


{



}


{

gdjs.MainCode.GDLeftArrowRoundButtonObjects2.length = 0;


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.MainCode.condition0IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.MainCode.GDLeftArrowRoundButtonObjects3);
{gdjs.MainCode.conditionTrue_2 = gdjs.MainCode.condition1IsTrue_1;
gdjs.MainCode.condition0IsTrue_2.val = false;
gdjs.MainCode.condition1IsTrue_2.val = false;
{
gdjs.MainCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDLeftArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_2.val ) {
{
gdjs.MainCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MainCode.conditionTrue_2.val = true && gdjs.MainCode.condition0IsTrue_2.val && gdjs.MainCode.condition1IsTrue_2.val;
}
if( gdjs.MainCode.condition1IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.MainCode.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.MainCode.GDLeftArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDLeftArrowRoundButtonObjects2_1final, gdjs.MainCode.GDLeftArrowRoundButtonObjects2);
}
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDLeftArrowRoundButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.MainCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.MainCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPaddleObjects2[i].returnVariable(gdjs.MainCode.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).add(2);
}
}{for(var i = 0, len = gdjs.MainCode.GDLeftArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDLeftArrowRoundButtonObjects2[i].setColor("46;141;0");
}
}}

}


{

gdjs.MainCode.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.MainCode.condition0IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.MainCode.GDRightArrowRoundButtonObjects3);
{gdjs.MainCode.conditionTrue_2 = gdjs.MainCode.condition1IsTrue_1;
gdjs.MainCode.condition0IsTrue_2.val = false;
gdjs.MainCode.condition1IsTrue_2.val = false;
{
gdjs.MainCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRightArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_2.val ) {
{
gdjs.MainCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MainCode.conditionTrue_2.val = true && gdjs.MainCode.condition0IsTrue_2.val && gdjs.MainCode.condition1IsTrue_2.val;
}
if( gdjs.MainCode.condition1IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainCode.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.MainCode.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final.push(gdjs.MainCode.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDRightArrowRoundButtonObjects2_1final, gdjs.MainCode.GDRightArrowRoundButtonObjects2);
}
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.MainCode.GDPaddleObjects2);
/* Reuse gdjs.MainCode.GDRightArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPaddleObjects2[i].returnVariable(gdjs.MainCode.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).sub(2);
}
}{for(var i = 0, len = gdjs.MainCode.GDRightArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRightArrowRoundButtonObjects2[i].setColor("46;141;0");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.MainCode.GDLeftArrowRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.MainCode.GDRightArrowRoundButtonObjects2);
{for(var i = 0, len = gdjs.MainCode.GDLeftArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDLeftArrowRoundButtonObjects2[i].setColor("83;255;0");
}
}{for(var i = 0, len = gdjs.MainCode.GDRightArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRightArrowRoundButtonObjects2[i].setColor("83;255;0");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.MainCode.GDPaddleObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBallObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPaddleObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11033932);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
/* Reuse gdjs.MainCode.GDPaddleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPaddleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bounce.wav", false, 10, 1);
}{runtimeScene.getScene().getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.MainCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDScoreObjects1[i].setString("SCORE: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Score")));
}
}}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


gdjs.MainCode.eventsList2(runtimeScene);
}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore"));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("HighScore").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score")));
}}

}


};gdjs.MainCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBallObjects1Objects) <= 0;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11036060);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.wav", false, 10, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", true);
}
{ //Subevents
gdjs.MainCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}}

}


{



}


{



}


{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList3(runtimeScene);
}


{


gdjs.MainCode.eventsList5(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBlock1Objects1.length = 0;
gdjs.MainCode.GDBlock1Objects2.length = 0;
gdjs.MainCode.GDBlock1Objects3.length = 0;
gdjs.MainCode.GDBlock1Objects4.length = 0;
gdjs.MainCode.GDBlock4Objects1.length = 0;
gdjs.MainCode.GDBlock4Objects2.length = 0;
gdjs.MainCode.GDBlock4Objects3.length = 0;
gdjs.MainCode.GDBlock4Objects4.length = 0;
gdjs.MainCode.GDBlock2Objects1.length = 0;
gdjs.MainCode.GDBlock2Objects2.length = 0;
gdjs.MainCode.GDBlock2Objects3.length = 0;
gdjs.MainCode.GDBlock2Objects4.length = 0;
gdjs.MainCode.GDBlock3Objects1.length = 0;
gdjs.MainCode.GDBlock3Objects2.length = 0;
gdjs.MainCode.GDBlock3Objects3.length = 0;
gdjs.MainCode.GDBlock3Objects4.length = 0;
gdjs.MainCode.GDScoreObjects1.length = 0;
gdjs.MainCode.GDScoreObjects2.length = 0;
gdjs.MainCode.GDScoreObjects3.length = 0;
gdjs.MainCode.GDScoreObjects4.length = 0;
gdjs.MainCode.GDBallObjects1.length = 0;
gdjs.MainCode.GDBallObjects2.length = 0;
gdjs.MainCode.GDBallObjects3.length = 0;
gdjs.MainCode.GDBallObjects4.length = 0;
gdjs.MainCode.GDCircleGuideObjects1.length = 0;
gdjs.MainCode.GDCircleGuideObjects2.length = 0;
gdjs.MainCode.GDCircleGuideObjects3.length = 0;
gdjs.MainCode.GDCircleGuideObjects4.length = 0;
gdjs.MainCode.GDHighScoreTextObjects1.length = 0;
gdjs.MainCode.GDHighScoreTextObjects2.length = 0;
gdjs.MainCode.GDHighScoreTextObjects3.length = 0;
gdjs.MainCode.GDHighScoreTextObjects4.length = 0;
gdjs.MainCode.GDPaddleObjects1.length = 0;
gdjs.MainCode.GDPaddleObjects2.length = 0;
gdjs.MainCode.GDPaddleObjects3.length = 0;
gdjs.MainCode.GDPaddleObjects4.length = 0;
gdjs.MainCode.GDBeginTextObjects1.length = 0;
gdjs.MainCode.GDBeginTextObjects2.length = 0;
gdjs.MainCode.GDBeginTextObjects3.length = 0;
gdjs.MainCode.GDBeginTextObjects4.length = 0;
gdjs.MainCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.MainCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.MainCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.MainCode.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.MainCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.MainCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.MainCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.MainCode.GDRightArrowRoundButtonObjects4.length = 0;

gdjs.MainCode.eventsList6(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
