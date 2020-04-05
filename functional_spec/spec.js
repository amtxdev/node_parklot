/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-04-05 16:56:49
 * @modify date 2020-04-05 16:56:49
 * @desc [description]
 */

const findEmptySlot = (data) => data.find((a) => a.isEmpty);

const findNumberSlot = (data, No) => data.find((a) => a.No === No);

const findPlate = (data, Plate) => data.find((b) => b.car.Plate === Plate);

const findColor = (data, Color) => data.find((b) => b.car.Color === Color);

module.exports = {
  findEmptySlot,
  findNumberSlot,
  findPlate,
  findColor,
};
