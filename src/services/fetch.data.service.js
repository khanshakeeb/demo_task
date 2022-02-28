import RecordsModel from '../models/record.model';

class FetchDataService {
    constructor(model) {
        this.model = model;
    }
   async fetchData(data) {
       const result = await this.model.aggregate([
           {
               $match: {
                   createdAt:{ $gte: new Date( data.startDate ), $lt: new Date( data.endDate ) }
               }
           },
           {
               $addFields: {
                   totalCount: {$sum: '$counts'}
               }
           },
           {
               $match: {
                   'totalCount': { $gt: data.minCount, $lt: data.maxCount}
               }
           },
           {
               $project: {
                   _id: 1,
                   createdAt: 1,
                   totalCount: 1,
                   counts:1,
                   key: 1
               }
           }
       ]);

       return result;
   }
}

export default new FetchDataService(RecordsModel);