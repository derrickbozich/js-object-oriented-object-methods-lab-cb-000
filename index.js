function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = () => "No, I must disagree";
  this.approve = () => "You can do that!";
}
