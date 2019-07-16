export class Hub {
	constructor(
	public forecasted_traffic: number,
	public hub_name: string,
	public max_port_size: number,
	public provisioned_capacity: number){}
}