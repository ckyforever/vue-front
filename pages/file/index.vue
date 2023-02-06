<template>
  <div class="table">
    <el-table
      :data="fileData"
      style="width: 100%">
      <el-table-column
        label="文件名称"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.fileName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="上传时间"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.uploadTime}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            @click="handleDownload(scope.$index, scope.row)">下载
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import cookie from "js-cookie";
import fileApi from "@/api/file"

export default {
  data() {
    return {
      fileData: []
    }
  },
  created() {
    let userId = cookie.get('userId')
    if (userId) {
      fileApi.getUserFileList(userId)
        .then(response => {
          this.fileData = response.data.rows
        })
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    }
    ,
    handleDownload(index, row) {
      console.log(index, row);
      window.location.href = 'http://localhost:8080' + row.filePath;
    }
  }
}
</script>

<style scoped>
.table {
  display: block;
  padding-left: 20%;
  padding-right: 20%;
}
</style>
