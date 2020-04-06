/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 */

const findVacantSlot = (data) => data.find((s) => s.isVacant);
const findBySlotNumber = (data, no) => data.find((s) => s.no === no);
const findByPlate = (data, plate) => data.find((p) => p.car.plate === plate);
const findByColor = (data, color) => data.filter((p) => p.car.color === color);

module.exports = {
  findVacantSlot,
  findBySlotNumber,
  findByPlate,
  findByColor,
};
