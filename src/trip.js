class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivites = tripData.suggestedActivites;
    this.endDate;
    // this.destinationDetails = destination;
    this.currentDestination;
    this.totalTripCost;
  }

  calculateTripCost() {
    const lodgingCost = this.currentDestination.estimatedLodgingCostPerDay * (this.duration / 86400000);
    const flightCost = this.currentDestination.estimatedFlightCostPerPerson * this.travelers * 2;
    const costTotal = 1.1 * (lodgingCost + flightCost);
    // const travelAgentFee = costTotal * .10
    this.totalTripCost = costTotal;
    return costTotal;
  }

  findEndDate() {
    this.date = newDate(this.date).getTime();
    let durationInMili = this.duration * 86400000;
    this.endDate = this.date + durationInMili;
  }

}








export default Trip;
